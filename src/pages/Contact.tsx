import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const socialLinks = [
    { name: 'Telegram', url: 'https://t.me/', icon: '✈️' },
    { name: 'VK', url: 'https://vk.com/', icon: 'VK' },
    { name: 'YouTube', url: 'https://youtube.com/', icon: '▶️' },
    { name: 'GitHub', url: 'https://github.com/', icon: '🐙' },
    { name: 'LinkedIn', url: 'https://linkedin.com/', icon: '💼' },
  ];

  return (
    <div className="min-h-screen bg-slate-900 py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Связаться <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">со мной</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Есть вопрос или предложение? Напишите мне, и я отвечу в ближайшее время
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-white mb-8">Контактная информация</h2>

            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="text-purple-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Email</h3>
                  <a href="mailto:akim@example.com" className="text-gray-400 hover:text-purple-400 transition-colors">
                    akim@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="text-purple-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Телефон</h3>
                  <a href="tel:+79990000000" className="text-gray-400 hover:text-purple-400 transition-colors">
                    +7 (999) 000-00-00
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-purple-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Локация</h3>
                  <p className="text-gray-400">Москва, Россия</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="text-purple-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Часы работы</h3>
                  <p className="text-gray-400">Пн-Пт: 9:00 - 18:00</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <h2 className="text-2xl font-bold text-white mb-6">Социальные сети</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 text-center hover:border-purple-500/50 transition-colors"
                >
                  <span className="text-2xl mb-2 block">{social.icon}</span>
                  <span className="text-gray-300 text-sm">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Отправить сообщение</h2>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Сообщение отправлено!</h3>
                  <p className="text-gray-400">Я отвечу вам в ближайшее время</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">
                      Имя *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                      placeholder="Ваше имя"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                      placeholder="ваш@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-gray-300 mb-2">
                      Тема
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors"
                    >
                      <option value="">Выберите тему</option>
                      <option value="project">Предложение по проекту</option>
                      <option value="job">Вакансия</option>
                      <option value="collaboration">Сотрудничество</option>
                      <option value="other">Другое</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-300 mb-2">
                      Сообщение *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                      placeholder="Ваше сообщение..."
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-purple-500/25 transition-shadow flex items-center justify-center gap-2"
                  >
                    <Send size={20} />
                    Отправить сообщение
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
