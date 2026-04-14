import { motion } from 'framer-motion';
import { ExternalLink, Code, Star } from 'lucide-react';
import { useState } from 'react';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Полнофункциональная платформа электронной коммерции с корзиной, оплатой и админ-панелью',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      category: 'fullstack',
      github: 'https://github.com',
      demo: 'https://example.com',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Приложение для управления задачами с возможностью коллаборации в реальном времени',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800',
      tags: ['Next.js', 'TypeScript', 'Socket.io', 'MongoDB'],
      category: 'fullstack',
      github: 'https://github.com',
      demo: 'https://example.com',
      featured: true
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Интерактивная панель мониторинга погоды с прогнозами и картами',
      image: 'https://images.unsplash.com/photo-1628151016024-32d44d2354c6?w=800',
      tags: ['React', 'TypeScript', 'API', 'Chart.js'],
      category: 'frontend',
      github: 'https://github.com',
      demo: 'https://example.com',
      featured: false
    },
    {
      id: 4,
      title: 'Social Media API',
      description: 'RESTful API для социальной сети с аутентификацией и реальным временем',
      image: 'https://images.unsplash.com/photo-1614027164847-1b283fe8096f?w=800',
      tags: ['Node.js', 'Express', 'JWT', 'Redis'],
      category: 'backend',
      github: 'https://github.com',
      demo: '',
      featured: false
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'Мое персональное портфолио с современным дизайном и анимациями',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800',
      tags: ['React', 'Tailwind CSS', 'Framer Motion'],
      category: 'frontend',
      github: 'https://github.com',
      demo: 'https://example.com',
      featured: true
    },
    {
      id: 6,
      title: 'Analytics Dashboard',
      description: 'Панель аналитики с визуализацией данных и экспортными функциями',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
      tags: ['React', 'D3.js', 'Python', 'FastAPI'],
      category: 'fullstack',
      github: 'https://github.com',
      demo: 'https://example.com',
      featured: false
    }
  ];

  const categories = [
    { id: 'all', label: 'Все' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'fullstack', label: 'Full Stack' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

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
            Мои <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Проекты</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Избранные проекты, которые демонстрируют мои навыки и опыт
          </p>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === cat.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                  : 'bg-slate-800 text-gray-400 hover:text-white hover:bg-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-slate-800/50 border border-slate-700 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                    <Star size={12} fill="currentColor" />
                    Featured
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-slate-700 text-gray-300 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      <ExternalLink size={18} />
                      <span>Демо</span>
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    <span>Код</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <Code className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <p className="text-gray-400 text-lg">Проекты в этой категории пока нет</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
