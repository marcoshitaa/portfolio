import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const timelineData = {
  education: [
    {
      title: "education.ed1.title",
      timeRange: "education.ed1.timeRange",
      description: "education.ed1.description",
    },
    {
      title: "education.ed2.title",
      timeRange: "education.ed2.timeRange",
      description: "education.ed2.description",
    },
    {
      title: "education.ed3.title",
      timeRange: "education.ed3.timeRange",
      description: "education.ed3.description",
    },
  ],
  experience: [
    {
      title: "experience.exp1.title",
      timeRange: "experience.exp1.timeRange",
      description: "experience.exp1.description",
    },
    {
      title: "experience.exp2.title",
      timeRange: "experience.exp2.timeRange",
      description: "experience.exp2.description",
    },
    {
      title: "experience.exp3.title",
      timeRange: "experience.exp3.timeRange",
      description: "experience.exp3.description",
    },
    {
      title: "experience.exp4.title",
      timeRange: "experience.exp4.timeRange",
      description: "experience.exp4.description",
    },
    {
      title: "experience.exp5.title",
      timeRange: "experience.exp5.timeRange",
      description: "experience.exp5.description",
    },
  ],
};

const TimelineCard = ({ timeRange, title, description, onClick, index }) => (
  <div
    onClick={onClick}
    className="group relative mb-8 cursor-pointer transition-all duration-300 hover:-translate-y-1"
  >
    <div className="relative bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 transition-all duration-300 group-hover:bg-slate-800/50 group-hover:border-blue-500/30 group-hover:shadow-lg group-hover:shadow-blue-500/10">
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-cyan-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-medium text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full border border-blue-400/20">
            {timeRange}
          </span>
        </div>
        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
          {title}
        </h3>
        <p className="text-slate-400 text-sm line-clamp-2">
          {description ? (description.includes('.') ? description.split('.')[0] + '...' : description) : ''}
        </p>
        
        {/* Click indicator */}
        <div className="flex items-center gap-2 mt-4 text-xs text-slate-500 group-hover:text-blue-400 transition-colors">
          <span>Ver detalles</span>
          <svg className="w-3 h-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  </div>
);


const Modal = ({ isOpen, onClose, title, description, timeRange }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center z-50 px-4"
      onClick={onClose}
    >
      <div
        className="bg-slate-900 border border-slate-700/50 rounded-3xl shadow-2xl max-w-lg w-full mx-4 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with gradient */}
        <div className="bg-gradient-to-r from-blue-600/10 to-cyan-600/10 border-b border-slate-700/50 p-6">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full border border-blue-400/20">
              {timeRange}
            </span>
            <button
              onClick={onClose}
              className="p-2 hover:bg-slate-800/50 rounded-lg transition-colors text-slate-400 hover:text-white"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <h3 className="text-xl font-bold text-white mt-4">{title}</h3>
        </div>
        
        {/* Content */}
        <div className="p-6">
          <p className="text-slate-300 leading-relaxed mb-6">
            {description}
          </p>
          <button
            onClick={onClose}
            className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/25"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

const Timeline = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', description: '', timeRange: '' });

  const openModal = (title, description, timeRange) => {
    setModalContent({ title, description, timeRange });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full py-20 bg-slate-950 relative" name="experience" id="experience" style={{backgroundColor: '#020617'}}>
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Mi <span className="text-blue-400">Trayectoria</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Un recorrido por mi formación académica y experiencia profesional
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Experience Section */}
          <div className="relative">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">{t('experience.title')}</h3>
            </div>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute top-0 bottom-0 left-6 w-px bg-gradient-to-b from-blue-500 via-cyan-500 to-transparent"></div>
              
              {/* Timeline Cards */}
              {timelineData.experience.map((item, index) => (
                <div key={index} className="relative pl-16 mb-6">
                  {/* Timeline Dot */}
                  <div className="absolute left-4 top-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-950 shadow-lg shadow-blue-500/20"></div>
                  
                  <TimelineCard
                    timeRange={t(item.timeRange)}
                    title={t(item.title)}
                    description={t(item.description)}
                    onClick={() => openModal(t(item.title), t(item.description), t(item.timeRange))}
                    index={index}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="relative">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 bg-cyan-600 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">{t('education.title')}</h3>
            </div>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute top-0 bottom-0 left-6 w-px bg-gradient-to-b from-cyan-500 via-blue-500 to-transparent"></div>
              
              {/* Timeline Cards */}
              {timelineData.education.map((item, index) => (
                <div key={index} className="relative pl-16 mb-6">
                  {/* Timeline Dot */}
                  <div className="absolute left-4 top-6 w-4 h-4 bg-cyan-500 rounded-full border-4 border-slate-950 shadow-lg shadow-cyan-500/20"></div>
                  
                  <TimelineCard
                    timeRange={t(item.timeRange)}
                    title={t(item.title)}
                    description={t(item.description)}
                    onClick={() => openModal(t(item.title), t(item.description), t(item.timeRange))}
                    index={index}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={modalContent.title}
        description={modalContent.description}
        timeRange={modalContent.timeRange}
      />
    </div>
  );
};

export default Timeline;