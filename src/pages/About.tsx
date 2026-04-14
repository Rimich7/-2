import { motion } from 'framer-motion';
import { Mail, MapPin, Code, Database, Layout, Terminal } from 'lucide-react';

export default function About() {
  const skills = [
    { name: 'Frontend', icon: Layout, items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
    { name: 'Backend', icon: Database, items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST API'] },
    { name: 'Tools', icon: Terminal, items: ['Git', 'Docker', 'AWS', 'Vercel', 'VS Code'] },
    { name: 'Other', icon: Code, items: ['HTML/CSS', 'JavaScript', 'Testing', 'CI/CD', 'Agile'] },
  ];

  const experience = [
    {
      year: '2023 - Настоящее время',
      role: 'Senior Frontend Developer',
      company: 'Tech Company',
      description: 'Разработка и поддержка крупных веб-приложений, менторство младших разработчиков'
    },
    {
      year: '2021 - 2023',
      role: 'Full Stack Developer',
      company: 'Web Studio',
      description: 'Создание SPA приложений, интеграция с внешними API, оптимизация производительности'
    },
    {
      year: '2019 - 2021',
      role: 'Junior Developer',
      company: 'Startup Inc',
      description: 'Разработка интерфейсов, участие в проектировании архитектуры, код-ревью'
    }
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
            Обо <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">мне</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Узнайте больше о моём профессиональном пути и навыках
          </p>
        </motion.div>

        {/* About Info */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Кто я такой?</h2>
            <p className="text-gray-300 text-lg mb-4 leading-relaxed">
              Привет! Меня зовут <span className="text-purple-400 font-semibold">Аким Камышов</span>. 
              Я passionate Full Stack разработчик с более чем 5-летним опытом создания современных веб-приложений.
            </p>
            <p className="text-gray-300 text-lg mb-4 leading-relaxed">
              Моя страсть — создавать интуитивно понятные, быстрые и масштабируемые решения, 
              которые помогают бизнесу расти и достигать своих целей.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Постоянно обучаюсь новым технологиям и следую лучшим практикам разработки. 
              Всегда открыт для интересных проектов и сотрудничества.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl border border-purple-500/30 p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4">
                  5+
                </div>
                <p className="text-gray-400 text-lg">Лет опыта</p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-600/20 rounded-full blur-3xl"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-pink-600/20 rounded-full blur-3xl"></div>
          </motion.div>
        </div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Навыки и технологии</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-purple-500/50 transition-colors"
              >
                <skill.icon className="w-10 h-10 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-4">{skill.name}</h3>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li key={item} className="text-gray-400 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Опыт работы</h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 to-pink-600 transform md:-translate-x-1/2"></div>
            
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-purple-500 rounded-full transform -translate-x-1/2 mt-6 md:mt-0 border-4 border-slate-900"></div>
                
                {/* Content */}
                <div className="ml-8 md:ml-0 md:w-1/2 md:px-8">
                  <div className={`bg-slate-800/50 border border-slate-700 rounded-xl p-6 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <span className="text-purple-400 text-sm font-medium">{exp.year}</span>
                    <h3 className="text-xl font-bold text-white mt-2">{exp.role}</h3>
                    <p className="text-pink-400 mb-3">{exp.company}</p>
                    <p className="text-gray-400">{exp.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 bg-slate-800/50 border border-slate-700 rounded-2xl p-8"
        >
          <h2 className="text-2xl font-bold text-white text-center mb-8">Контактная информация</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-3 text-gray-300">
              <Mail className="text-purple-400" />
              <span>akim@example.com</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <MapPin className="text-purple-400" />
              <span>Москва, Россия</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
