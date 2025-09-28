import '../../index.css';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faLaravel, faReact } from '@fortawesome/free-brands-svg-icons';
import { faWind } from '@fortawesome/free-solid-svg-icons';

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

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 120, damping: 18 }
  }
};

const skills = [
  { name: 'HTML', note: 'Semantic structure, SEO basics', icon: faHtml5, color: 'text-orange-400', bg: 'bg-orange-400/10' },
  { name: 'CSS', note: 'Responsive layout, Flexbox, Grid', icon: faCss3Alt, color: 'text-blue-400', bg: 'bg-blue-400/10' },
  { name: 'Tailwind CSS', note: 'Utility-first styling', icon: faWind, color: 'text-cyan-400', bg: 'bg-cyan-400/10' },
  { name: 'Laravel', note: 'MVC, REST API, Eloquent', icon: faLaravel, color: 'text-red-400', bg: 'bg-red-400/10' },
  { name: 'ReactJS', note: 'Hooks, SPA, Component patterns', icon: faReact, color: 'text-cyan-300', bg: 'bg-cyan-300/10' }
];

function Skills() {
  return (
    <motion.section
      id="skills"
      className="min-h-screen py-20 pb-36 px-6 bg-[#0a0a0a] text-center"
      initial="hidden"
      animate="show"
      variants={containerVariants}
    >
      <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-white mb-10">
        <span className="text-blue-200">My</span> Skills
      </motion.h2>
      <motion.div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto" variants={containerVariants}>
        {skills.map((s) => (
          <motion.div key={s.name} variants={cardVariants} className="bg-gradient-to-br from-blue-200/30 to-transparent p-[1px] rounded-2xl">
            <div className="flex h-full flex-col items-start bg-[#111827] border border-blue-200/50 rounded-2xl p-6 text-left shadow-lg hover:-translate-y-1 hover:shadow-blue-200/40 transition-all">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${s.bg}`}>
                <FontAwesomeIcon icon={s.icon} className={`${s.color} text-xl`} />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-1">{s.name}</h3>
              <p className="text-blue-100 text-sm">{s.note}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default Skills;
