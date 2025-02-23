import React from 'react';
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
  ],
  
};

const TimelineCard = ({ timeRange, title, description }) => (
  <div className="relative mb-8 hover:scale-105 transition transform duration-300">
    {/* Card Content */}
    <div className="shadow-md rounded-md p-6 border border-white-300">
      <p className="text-sm text-white">{timeRange}</p>
      <h3 className="text-lg font-bold text-white">{title}</h3>
      <p className="text-white">{description}</p>
    </div>
  </div>
);

const Timeline = () => {

  const { t } = useTranslation();

  return (
    <div className="w-full py-12 bg-[#0a192f]" name="experience" id="experience">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mr-4">
        
        {/* Experience Section */}
        <div className="relative">
          <h2 className="text-white text-2xl font-bold mb-6">{t("experience.title")}</h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-0 bottom-0 left-7 w-1 bg-gray-300"></div>
            {/* Timeline Cards */}
            {timelineData.experience.map((item, index) => (
              <div key={index} className="relative pl-14">
                {/* Dot */}
                <div className="absolute left-6 top-6 w-4 h-4 bg-green-500 rounded-full border-4 border-white"></div>
                {/* Card */}
                <TimelineCard
                  timeRange={t(item.timeRange)}
                  title={t(item.title)}
                  description={t(item.description)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="relative">
          <h2 className="text-white text-2xl font-bold mb-6">{t("education.title")}</h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-0 bottom-0 left-7 w-1 bg-gray-300"></div>
            {/* Timeline Cards */}
            {timelineData.education.map((item, index) => (
              <div key={index} className="relative pl-14">
                {/* Dot */}
                <div className="absolute left-6 top-6 w-4 h-4 bg-green-500 rounded-full border-4 border-white"></div>
                {/* Card */}
                <TimelineCard
                  timeRange={t(item.timeRange)}
                  title={t(item.title)}
                  description={t(item.description)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
