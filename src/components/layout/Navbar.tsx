"use client";

import { useState } from "react";
import { NAV_ITEMS } from "@/lib/constants";
import { scrollToSection } from "@/lib/utils";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    if (href.startsWith("/")) {
      setIsMenuOpen(false);
    } else {
      // Eğer ana sayfada değilsek, önce ana sayfaya git
      if (window.location.pathname !== "/") {
        window.location.href = "/" + href;
      } else {
        scrollToSection(href);
      }
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        id="navbar"
        className="fixed top-0 z-40 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md transition-all duration-300 dark:border-dark-800/50 dark:bg-dark-900/80"
      >
        <div className="section-container section-padding">
          <div className="flex h-14 items-center justify-between sm:h-16">
            <a href="/" className="group flex items-center">
              <div className="relative h-12 w-40 transition-transform duration-300 group-hover:scale-105 sm:h-14 sm:w-48">
                <img
                  src="/logo.png"
                  alt="goldsword"
                  width={192}
                  height={56}
                  style={{ width: "100%", height: "100%", objectFit: "contain" }}
                />
              </div>
            </a>

            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                {NAV_ITEMS.map((item) =>
                  item.href.startsWith("/") ? (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-heading text-lg font-semibold transition-colors hover:text-primary-600"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <button
                      key={item.href}
                      onClick={() => handleNavClick(item.href)}
                      className="text-heading text-lg font-semibold transition-colors hover:text-primary-600"
                    >
                      {item.label}
                    </button>
                  ),
                )}
              </div>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-heading rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-dark-800 md:hidden"
              aria-label={isMenuOpen ? "Menüyü Kapat" : "Menüyü Aç"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <div className="fixed inset-0 z-[100] overflow-hidden md:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute bottom-0 right-0 top-0 flex w-[85%] max-w-sm flex-col bg-white shadow-2xl dark:bg-dark-900"
            >
              <div className="flex items-center justify-between border-b border-gray-100 p-6 dark:border-dark-800">
                <span className="gradient-text text-xl font-bold">Menü</span>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-heading rounded-xl bg-gray-50 p-2.5 transition-all active:scale-90 dark:bg-dark-800"
                  aria-label="Menüyü Kapat"
                >
                  <FaTimes size={20} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-8">
                <div className="flex flex-col space-y-2 px-4">
                  {NAV_ITEMS.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 + index * 0.05 }}
                    >
                      {item.href.startsWith("/") ? (
                        <a
                          href={item.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="text-heading flex w-full items-center rounded-2xl px-6 py-4 text-xl font-bold transition-all hover:bg-primary-50 active:scale-[0.98] dark:hover:bg-primary-900/10"
                        >
                          {item.label}
                        </a>
                      ) : (
                        <button
                          onClick={() => handleNavClick(item.href)}
                          className="text-heading flex w-full items-center rounded-2xl px-6 py-4 text-xl font-bold transition-all hover:bg-primary-50 active:scale-[0.98] dark:hover:bg-primary-900/10"
                        >
                          {item.label}
                        </button>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-100 p-8 text-center dark:border-dark-800">
                <p className="text-muted text-sm font-medium">© 2026 goldsword</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
