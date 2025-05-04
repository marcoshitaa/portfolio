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

const TimelineCard = ({ timeRange, title, description, onClick }) => (
  <div
    onClick={onClick}
    className="relative mb-8 hover:scale-105 transition transform duration-300 cursor-pointer"
  >
    <div className="shadow-md rounded-md p-6 border border-white-300">
      <p className="text-sm text-white">{timeRange}</p>
      <h3 className="text-lg font-bold text-white">{title}</h3>
    </div>
  </div>
);

const Modal = ({ isOpen, onClose, title, description }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-gray-800 bg-opacity-70 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-8 rounded-md shadow-lg max-w-lg w-full mx-4 sm:mx-8 md:mx-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-sm mb-4">{description}</p>
        <button
          onClick={onClose}
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-400"
        >
          Close
        </button>
      </div>
    </div>
  );
};


const Timeline = () => {
  const { t } = useTranslation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', description: '' });

  const openModal = (title, description) => {
    setModalContent({ title, description });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full py-12 bg-[#0a192f]" name="experience" id="experience">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-4">
        {/* Experience Section */}
        <div className="relative">
          <h2 className="text-white text-2xl font-bold mb-6">{t('experience.title')}</h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-0 bottom-0 left-7 w-1 bg-gray-300"></div>
            {/* Timeline Cards */}
            {timelineData.experience.map((item, index) => (
              <div key={index} className="relative pl-14">
                {/* Dot */}
                <div className="absolute left-6 top-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-white"></div>
                {/* Card */}
                <TimelineCard
                  timeRange={t(item.timeRange)}
                  title={t(item.title)}
                  description={t(item.description)}
                  onClick={() => openModal(t(item.title), t(item.description))}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="relative">
          <h2 className="text-white text-2xl font-bold mb-6">{t('education.title')}</h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-0 bottom-0 left-7 w-1 bg-gray-300"></div>
            {/* Timeline Cards */}
            {timelineData.education.map((item, index) => (
              <div key={index} className="relative pl-14">
                {/* Dot */}
                <div className="absolute left-6 top-5 w-4 h-4 bg-blue-500 rounded-full border-4 border-white"></div>
                {/* Card */}
                <TimelineCard
                  timeRange={t(item.timeRange)}
                  title={t(item.title)}
                  description={t(item.description)}
                  onClick={() => openModal(t(item.title), t(item.description))}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={modalContent.title}
        description={modalContent.description}
      />
    </div>
  );
};

export default Timeline;
