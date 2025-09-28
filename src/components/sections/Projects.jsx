import '../../index.css';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import pandhuImg from '../../assets/pandhu.jpg';
import unitherImg from '../../assets/unither.jpg';
import portfolioImg from '../../assets/portofolio.jpg';

const soloProjects = [
  {
    title: 'Portfolio Website',
    desc: 'My personal portfolio built with React & Tailwind.',
    tech: ['React', 'Tailwind', 'Framer Motion'],
    repo: 'https://github.com/Losync/MyAbsolutePortofolio',
    demo: 'https://username.github.io/portfolio',
    image: portfolioImg
  },
];

const teamProjects = [
  {
    title: "Pandhu",
    desc: 'An earthquake warning system application built with Flutter.',
    tech: ['Flutter', 'Firebase', 'Dart', 'AI'],
    repo: 'https://github.com/Losync/HomePage-Pandhu',
    demo: '#',
    image: pandhuImg
  },
  {
    title: 'Unither',
    desc: 'An classroom cummunity mobile application with AI assistant.',
    tech: ['React Native', 'Firebase', 'Dart', 'AI'],
    repo: 'https://github.com/Losync/Unither',
    demo: '#',
    image: unitherImg
  }
];

// Animation variants
const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 120, damping: 20 }
  }
};

// itemVariants for card children
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

function Projects() {
  return (
    <motion.section
      id="projects"
      className="min-h-screen py-20 pb-36 px-6 bg-[#0a0a0a] text-center"
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.h2 variants={cardVariants} className="text-4xl md:text-5xl font-bold text-white mb-10">
        <span className="text-blue-200">My</span> Projects
      </motion.h2>

      {/* Solo Projects */}
      <motion.h3 variants={cardVariants} className="text-2xl md:text-3xl font-semibold text-white mt-6 mb-6">
        Solo Projects
      </motion.h3>
      <motion.div
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
        variants={containerVariants}
      >
        {soloProjects.map((p, i) => (
          <motion.div
            key={`solo-${i}`}
            variants={cardVariants}
            className="flex flex-col bg-[#111827] border border-blue-200 rounded-2xl p-6 text-left shadow-lg hover:shadow-blue-200/40 transition-shadow"
          >
            {p.image ? (
              <div className="mb-4 overflow-hidden rounded-xl border border-blue-200/40">
                <img src={p.image} alt={`${p.title} preview`} className="w-full h-40 object-cover" />
              </div>
            ) : (
              <div className="mb-4 h-40 w-full rounded-xl border border-blue-200/40 bg-gradient-to-br from-blue-900/40 to-blue-200/10" />
            )}
            <h3 className="text-2xl font-semibold text-white mb-2">{p.title}</h3>
            <p className="text-blue-100 mb-4">{p.desc}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {p.tech.map((t) => (
                <span key={t} className="text-xs bg-blue-200 text-blue-900 px-2 py-1 rounded-md">
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-auto flex gap-4">
              <a href={p.repo} target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white text-xl">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              {p.demo !== '#' && (
                <a href={p.demo} target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white text-xl">
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Team Projects */}
      <motion.h3 variants={cardVariants} className="text-2xl md:text-3xl font-semibold text-white mt-12 mb-6">
        Team Projects
      </motion.h3>
      <motion.div
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
        variants={containerVariants}
      >
        {teamProjects.map((p, i) => (
          <motion.div
            key={`team-${i}`}
            variants={cardVariants}
            className="flex flex-col bg-[#111827] border border-blue-200 rounded-2xl p-6 text-left shadow-lg hover:shadow-blue-200/40 transition-shadow"
          >
            {p.image ? (
              <div className="mb-4 overflow-hidden rounded-xl border border-blue-200/40">
                <img src={p.image} alt={`${p.title} preview`} className="w-full h-40 object-cover" />
              </div>
            ) : (
              <div className="mb-4 h-40 w-full rounded-xl border border-blue-200/40 bg-gradient-to-br from-blue-900/40 to-blue-200/10" />
            )}
            <h3 className="text-2xl font-semibold text-white mb-2">{p.title}</h3>
            <p className="text-blue-100 mb-4">{p.desc}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {p.tech.map((t) => (
                <span key={t} className="text-xs bg-blue-200 text-blue-900 px-2 py-1 rounded-md">
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-auto flex gap-4">
              <a href={p.repo} target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white text-xl">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              {p.demo !== '#' && (
                <a href={p.demo} target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white text-xl">
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default Projects;
