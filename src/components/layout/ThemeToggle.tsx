"use client";

import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    // Client-side initialization
    const savedTheme =
      localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setTheme(savedTheme);
  }, []);

  const toggleTheme = (event: React.MouseEvent) => {
    const newTheme = theme === "light" ? "dark" : "light";

    // Check if View Transition API is supported
    if (!document.startViewTransition) {
      applyTheme(newTheme);
      return;
    }

    // Get the click position for the circular transition
    const x = event.clientX;
    const y = event.clientY;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );

    const transition = document.startViewTransition(() => {
      applyTheme(newTheme);
    });

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`],
        },
        {
          duration: 500,
          easing: "ease-in-out",
          pseudoElement: "::view-transition-new(root)",
        },
      );
    });
  };

  const applyTheme = (newTheme: string) => {
    setTheme(newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", newTheme);
  };

  if (!theme) return null;

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-4 right-4 z-50 rounded-full border-2 border-gray-200 bg-white p-3 text-gray-800 shadow-lg transition-all duration-300 hover:scale-110 hover:border-primary-400 hover:shadow-xl dark:border-dark-700 dark:bg-dark-800 dark:text-yellow-300 dark:hover:border-yellow-400 sm:bottom-6 sm:right-6 sm:p-4 md:bottom-8 md:right-8"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <FaMoon size={18} className="sm:h-5 sm:w-5" />
      ) : (
        <FaSun size={18} className="sm:h-5 sm:w-5" />
      )}
    </button>
  );
};

export default ThemeToggle;
