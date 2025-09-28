import '../index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faLaptopCode, faPhone, faMicrochip } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion";
import { NavLink } from 'react-router-dom';

// Animation variants
const navVariants = {
    hidden: { y: 20, opacity: 0 },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 120,
            damping: 12,
            staggerChildren: 0.15
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0 },
    show: { opacity: 1, scale: 1 }
};

function Navbar() {
    const navItems = [
        { to: '/', label: 'Home', icon: faHouse, exact: true, aria: 'Home' },
        { to: '/projects', label: 'Projects', icon: faLaptopCode, aria: 'Projects' },
        { to: '/skills', label: 'Skills', icon: faMicrochip, aria: 'Skills' },
        { to: '/contact', label: 'Contact', icon: faPhone, aria: 'Contact' },
    ];

    const baseBtn = 'p-3 rounded-xl inline-flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300';
    const activeBtn = 'bg-blue-200 text-blue-900';
    const inactiveBtn = 'text-blue-200 hover:text-white hover:bg-white/5';

    return (
        <motion.nav
            id='navbar'
            role="navigation"
            aria-label="Primary"
            className='flex p-3 fixed bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 items-center justify-center border border-blue-200 rounded-2xl backdrop-blur-lg bg-[#0a0a0a]/50 shadow-lg z-50'
            variants={navVariants}
            initial="hidden"
            animate="show"
        >
            <motion.ul className='flex gap-4 text-blue-200' variants={navVariants}>
                {navItems.map(({ to, label, icon, exact, aria }) => (
                    <motion.li key={to} variants={itemVariants} whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.95 }}>
                        <NavLink
                            to={to}
                            end={!!exact}
                            aria-label={aria}
                            title={label}
                            className={({ isActive }) => `${baseBtn} ${isActive ? activeBtn : inactiveBtn}`}
                        >
                            <FontAwesomeIcon icon={icon} />
                        </NavLink>
                    </motion.li>
                ))}
            </motion.ul>
        </motion.nav>
    )
}


export default Navbar
