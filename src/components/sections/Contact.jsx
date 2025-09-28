import '../../index.css';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot, faPaperPlane, faCopy, faCheck } from '@fortawesome/free-solid-svg-icons';

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

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [copied, setCopied] = useState(false);

  const phoneNumber = '+62-858-6597-6250';
  const emailAddress = 'raihanzafran24@gmail.com';
  const locationText = 'Semarang, Indonesia';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validasi sederhana
    if (!form.name || !form.email || !form.message) {
      alert('Nama, Email, dan Pesan wajib diisi.');
      return;
    }
    const subject = encodeURIComponent(form.subject || `Message from ${form.name}`);
    const body = encodeURIComponent(`Nama: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
  };

  const copyPhone = async () => {
    try {
      await navigator.clipboard.writeText(phoneNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error('Copy failed', err);
    }
  };

  return (
    <motion.section
      id="contact"
      className="min-h-screen py-20 pb-36 px-6 bg-[#0a0a0a] text-center"
      initial="hidden"
      animate="show"
      variants={containerVariants}
    >
      <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-white mb-10">
        <span className="text-blue-200">Get</span> in Touch
      </motion.h2>
      <motion.p variants={itemVariants} className="max-w-2xl mx-auto text-blue-100 mb-12">
        Feel free to reach out for collaborations, project inquiries, or just a friendly hello 👋
      </motion.p>

      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 text-left">
        {/* Info Kontak */}
        <motion.div variants={itemVariants} className="bg-[#111827] border border-blue-200 rounded-2xl p-4 md:p-5">
          <h3 className="text-xl font-semibold text-white mb-3">Contact Information</h3>
          <ul className="space-y-3 text-blue-100">
            <li className="flex items-center gap-3">
              <FontAwesomeIcon className="text-blue-200" icon={faEnvelope} />
              <div className="flex flex-wrap items-center gap-x-2">
                <span className="text-white font-medium">Email:</span>
                <a className="hover:underline" href={`mailto:${emailAddress}`}>{emailAddress}</a>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <FontAwesomeIcon className="text-blue-200" icon={faPhone} />
              <div className="flex items-center gap-2">
                <span className="text-white font-medium">Phone:</span>
                <span>{phoneNumber}</span>
                <button onClick={copyPhone} className="ml-1 px-2 py-1 text-[11px] border border-blue-200 text-blue-200 rounded hover:bg-blue-200 hover:text-blue-900 transition-colors">
                  {copied ? (<><FontAwesomeIcon icon={faCheck} /> Copied</>) : (<><FontAwesomeIcon icon={faCopy} /> Copy</>)}
                </button>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <FontAwesomeIcon className="text-blue-200" icon={faLocationDot} />
              <div className="flex flex-wrap items-center gap-x-2">
                <span className="text-white font-medium">Location:</span>
                <span>{locationText}</span>
              </div>
            </li>
          </ul>
        </motion.div>

        {/* Form Kontak */}
        <motion.form variants={itemVariants} onSubmit={handleSubmit} className="bg-[#111827] border border-blue-200 rounded-2xl p-6">
          <h3 className="text-2xl font-semibold text-white mb-4">Send me a message</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-blue-100 mb-1">Name *</label>
              <input id="name" name="name" value={form.name} onChange={handleChange} placeholder="Your name" className="w-full px-3 py-2 bg-[#0a0a0a] border border-blue-200 rounded text-white focus:outline-none focus:ring-2 focus:ring-blue-300" />
            </div>
            <div>
              <label htmlFor="email" className="block text-blue-100 mb-1">Email *</label>
              <input type="email" id="email" name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" className="w-full px-3 py-2 bg-[#0a0a0a] border border-blue-200 rounded text-white focus:outline-none focus:ring-2 focus:ring-blue-300" />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="subject" className="block text-blue-100 mb-1">Subject</label>
              <input id="subject" name="subject" value={form.subject} onChange={handleChange} placeholder="Subject" className="w-full px-3 py-2 bg-[#0a0a0a] border border-blue-200 rounded text-white focus:outline-none focus:ring-2 focus:ring-blue-300" />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="message" className="block text-blue-100 mb-1">Message *</label>
              <textarea id="message" name="message" rows="5" value={form.message} onChange={handleChange} placeholder="Your message..." className="w-full px-3 py-2 bg-[#0a0a0a] border border-blue-200 rounded text-white focus:outline-none focus:ring-2 focus:ring-blue-300" />
            </div>
          </div>
          <button type="submit" className="mt-4 inline-flex items-center gap-2 px-5 py-2 bg-blue-200 text-blue-900 font-semibold rounded-lg hover:bg-blue-300 transition-colors">
            <FontAwesomeIcon icon={faPaperPlane} /> Send
          </button>
        </motion.form>
      </div>
    </motion.section>
  );
}

export default Contact;
