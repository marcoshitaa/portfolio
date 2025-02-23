//Works.jsx
import React from 'react';
import code from '../assets/code2.png';
import { useTranslation } from 'react-i18next';


const Works = () => {

    const projects = [
        { name: 'work.work1.title', description: 'work.work1.description', image: code, link: 'https://github.com'},
        { name: 'work.work2.title', description: 'work.work2.description', image: code, link: 'https://github.com'},
    ];

    const { t } = useTranslation();

    const renderProjects = (projects) => {
        return projects.map((project, index) => (
            <div
                key={index}
                style={{ backgroundImage: `url(${code})` }}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
            >
                <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
                    <span className='text-lg font-bold text-white tracking-wider'>{t(project.name)}</span>
                    <p className='text-center'>{t(project.description)}</p>
                    <div className='pt-8 text-center'>
                        <a href={project.link}><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button></a>
                        <a href={project.link}><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button></a>
                    </div>
                </div>
            </div>
        ));
    };


  return (
    // Main container with responsive height
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        {/* Section header */}
        <div className='pb-8 w-full flex justify-center items-center flex-col'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500'>{t("work.title")}</p>
          <p className='py-6 text-2xl'>{t("work.description")}</p>
        </div>

        {/* Project grid */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {/* Project card with hover overlay */}
          {renderProjects(projects)}
          {/* Additional project cards follow same pattern */}
        </div>
      </div>
    </div>
  );
};

export default Works;