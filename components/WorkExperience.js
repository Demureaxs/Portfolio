import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import { useState } from 'react';

function WorkExperience() {
  const [hundredDevs, setHundredDevs] = useState({
    company: '100Devs',
    logo: 'https://media.licdn.com/dms/image/C4E0BAQGIlYsjeJ1xcg/company-logo_200_200/0/1620334581399?e=2147483647&v=beta&t=ILX3XXTqOao8Y5yAuBMjn9SUvkdFlaK4CiHQfhHYK_0',
    position: 'Software Engineer',
    date: 'Started: 2020 - Present',
    pointOne: "Worked with Restful API's",
    pointTwo: 'Worked with ReactJS',
    pointThree: 'MongoDB CRUD apps',
    pointFour: 'NodeJS, Mongoose and Express',
    pointFive: 'Strong understanding of Vanilla JS',
    tech: true,
  });

  const [evero, setEvero] = useState({
    company: 'Evero Beauty',
    logo: 'https://static.wixstatic.com/media/5c1dbc_8a3b84789f6647c8909c551c29c4845f~mv2.png/v1/crop/x_313,y_11,w_661,h_737/fill/w_368,h_402,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/5c1dbc_8a3b84789f6647c8909c551c29c4845f~mv2.png',
    position: 'Director',
    date: 'Started: 06/2019 - Present',
    pointOne: 'Set up Home Service',
    pointTwo: 'Successful franchise',
    pointThree: 'Product Sourcing',
    pointFour: 'Budgeting and Development',
    pointFive: 'Finance and Accounting',
    tech: false,
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative h-screen overflow-hidden flex-col items-center text-center md:flex-row max-w-screen-xl px-10 justify-evenly mx-auto"
    >
      <h3 className="absolute top-20 sm:top-24 uppercase tracking-[20px] text-gray-500 text-2xl text-center">
        Experience
      </h3>

      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-500/20 scrollbar-thumb-[#faab0a]/60">
        <ExperienceCard
          company={hundredDevs.company}
          logo={hundredDevs.logo}
          position={hundredDevs.position}
          date={hundredDevs.date}
          pointOne={hundredDevs.pointOne}
          pointTwo={hundredDevs.pointTwo}
          pointThree={hundredDevs.pointThree}
          pointFour={hundredDevs.pointFour}
          pointFive={hundredDevs.pointFive}
          tech={hundredDevs.tech}
        />
        <ExperienceCard
          company={evero.company}
          logo={evero.logo}
          position={evero.position}
          date={evero.date}
          pointOne={evero.pointOne}
          pointTwo={evero.pointTwo}
          pointThree={evero.pointThree}
          pointFour={evero.pointFour}
          pointFive={evero.pointFive}
        />
        {/* <ExperienceCard />
        <ExperienceCard /> */}
      </div>
    </motion.div>
  );
}

export default WorkExperience;
