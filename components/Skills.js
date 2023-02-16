import React from 'react';
import { motion } from 'framer-motion';
import Skill from './Skill';
import { useState } from 'react';
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiExpress,
  SiNextdotjs,
  SiMongodb,
  SiFirebase,
} from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { FaNodeJs } from 'react-icons/fa';

function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className=" min-h-screen flex relative flex-col justify-center items-center text-center xl:flex-row max-w-screen-2xl xl:px-10 min-h-screen xl:space-y-0 mx-auto"
    >
      <h3 className="absolute top-20 md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        skills
      </h3>

      <h3 className=" absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Tech I Use
      </h3>

      <motion.div
        initial={{
          y: 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid grid-cols-4 gap-5 mt-16"
      >
        {/* initial=
        {{
          x: isLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }} */}
        <SiCss3 className="h-10 w-10 sm:h-24 sm:w-24 text-[#264de4] overflow-hidden" />
        <SiHtml5 className="h-10 w-10 sm:h-24 sm:w-24 text-[#e54c20]" />
        <SiJavascript className="h-10 w-10 sm:h-24 sm:w-24 text-[#f7df1b]" />
        <SiReact className="h-10 w-10 sm:h-24 sm:w-24 text-[#67dbf9]" />
        <SiTailwindcss className="h-10 w-10 sm:h-24 sm:w-24 text-[#36bdf7]" />
        <SiExpress className="h-10 w-10 sm:h-24 sm:w-24 text-white" />
        <FaNodeJs className="h-10 w-10 sm:h-24 sm:w-24 text-[#7cc326]" />
        <SiNextdotjs className="h-10 w-10 sm:h-24 sm:w-24 text-white" />
        <SiMongodb className="h-10 w-10 sm:h-24 sm:w-24 text-[#54ad44]" />
        <SiFirebase className="h-10 w-10 sm:h-24 sm:w-24 text-[#ffcc30]" />
      </motion.div>
    </motion.div>
  );
}

export default Skills;
