import { motion } from "framer-motion"

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1,
        },
    },
}

export const Projects = () => {
    return <motion.section
        id="projects"
        className="projects"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
    >
        <motion.h2
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
        >
            My Projects
        </motion.h2>

        <motion.div
            className="project-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
        >
            {/* project 1 */}
            <motion.div
                className="project-card"
                variants={fadeInUp}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
                <motion.div
                    className="project-image"
                    style={{ backgroundImage: "url('/projects/image_file_name.png')" }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                />
                <h3>Project Name</h3>
                <p>
                    Description
                </p>
                <div className="project-tech">
                    <span>Tech</span>
                </div>
            </motion.div>

            {/* project 2 */}
            <motion.div
                className="project-card"
                variants={fadeInUp}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
                <motion.div
                    className="project-image"
                    style={{ backgroundImage: "url('/projects/image_file_name.png')" }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                />
                <h3>Project Name</h3>
                <p>
                    Description
                </p>
                <div className="project-tech">
                    <span>Tech</span>
                </div>
            </motion.div>

            {/* project 3 */}
            <motion.div
                className="project-card"
                variants={fadeInUp}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
                <motion.div
                    className="project-image"
                    style={{ backgroundImage: "url('/projects/image_file_name.png')" }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                />
                <h3>Project Name</h3>
                <p>
                    Description
                </p>
                <div className="project-tech">
                    <span>Tech</span>
                </div>
            </motion.div>
        </motion.div>
    </motion.section>
}