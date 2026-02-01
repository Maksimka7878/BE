import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import type { ReactNode } from 'react';

interface PageTransitionProps {
    children: ReactNode;
}

const pageVariants = {
    initial: {
        opacity: 0,
        y: 10,
    },
    animate: {
        opacity: 1,
        y: 0,
    },
    exit: {
        opacity: 0,
        y: -10,
    },
};

const pageTransition = {
    type: 'tween' as const,
    ease: 'easeInOut' as const,
    duration: 0.2,
};

export function PageTransition({ children }: PageTransitionProps) {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={location.pathname}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={pageTransition}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}

// Animation variants for product cards
export const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.05,
            duration: 0.3,
            ease: 'easeOut',
        },
    }),
    hover: {
        y: -4,
        transition: { duration: 0.2 },
    },
    tap: {
        scale: 0.98,
        transition: { duration: 0.1 },
    },
};

// Button animation variants
export const buttonVariants = {
    hover: {
        scale: 1.02,
        transition: { duration: 0.2 },
    },
    tap: {
        scale: 0.98,
        transition: { duration: 0.1 },
    },
};

// Fade in animation for containers
export const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.4,
            staggerChildren: 0.1,
        },
    },
};

// Slide up for items
export const slideUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4 },
    },
};
