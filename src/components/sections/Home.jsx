import '../../index.css'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'
import profileImg from '../../assets/profile1.jpg'

// Animation variants
const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: { staggerChildren: 0.15, type: 'spring', stiffness: 120, damping: 20 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

function Home() {
    return (
        <motion.section
            id="home"
            className="h-screen flex flex-col items-center justify-center gap-6 text-center px-6"
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.3, once: false }}
            variants={containerVariants}
        >
            <motion.img
                variants={itemVariants}
                src={profileImg}
                alt="Profile"
                className="w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-blue-200 object-cover"
            />
            <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
                Hello, I'm <span className="text-blue-200">Raihan Zafran</span>
            </motion.h1>
            <motion.p variants={itemVariants} className="text-lg md:text-xl max-w-2xl text-blue-100">
                A passionate beginner web developer willing to know more about web development.
            </motion.p>
            <motion.div variants={itemVariants} className="flex gap-4 mt-4">
                <Link to="/projects" className="px-6 py-2 bg-blue-200 text-blue-900 font-semibold rounded-lg hover:bg-blue-300 transition-colors">View Projects</Link>
                <Link to="/contact" className="px-6 py-2 border border-blue-200 text-blue-200 font-semibold rounded-lg hover:bg-blue-200 hover:text-blue-900 transition-colors">Contact Me</Link>
            </motion.div>
        </motion.section>
    )
}

export default Home
