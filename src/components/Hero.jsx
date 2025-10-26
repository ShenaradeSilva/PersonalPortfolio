import { motion } from "framer-motion"

const fadeInUp = {
    initial: { opacity:0, y: 20 },
    animate: {opacity: 1, y: 0 },
    transition: { duration: 0.6 },
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1,
        },
    },
}

export const Hero = () => {
    return (
    <motion.section
        id="home"
        className="hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2}}
    >
        <div className="hero-container">
            <motion.div 
                className="hero-content"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
            >
                <motion.div className="hero-badge">
                    <span>👋 Hello, I'm </span>
                </motion.div>

                <motion.h1
                    className="glitch"
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02 }}
                >
                    Shenara De Silva
                </motion.h1>

                <motion.h2 className="hero-subtitle">
                    Innovative & Creative Developer
                </motion.h2>

                <motion.p>
                    
                </motion.p>
            </motion.div>
        </div>
    </motion.section>
    );
}