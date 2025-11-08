'use client'

import { motion } from 'framer-motion'

interface AnimatedTextProps {
    children: React.ReactNode
}

const AnimatedText = ({ children }: AnimatedTextProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            {children}
        </motion.div>
    )
}

export default AnimatedText