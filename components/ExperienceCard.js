import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  DiJsBadge,
  DiHtml5,
  DiCss3,
  DiReact,
  DiJavascript,
} from 'react-icons/di';
import { SiJavascript } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';

function ExperienceCard(props) {
  return (
    <article className="flex flex-col mt-20 rounded-lg justify-center items-center space-y-2 sm:space-y-7 flex-shrink-0 w-screen md:w-screen xl:w-screen snap-center snap-mandatory bg-[#292929] p-5 sm:p-10 ">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transistion={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`${
          !props.tech && 'bg-gray-300'
        } h-20 w-20  md:h-32 md:w-32 rounded-full xl:h-[200px] xl:w-[200px] object-cover object-center`}
        alt="100devs logo"
        width={200}
        height={300}
        src={props.logo}
      />
      <div className="px-0 md:px-10">
        {!props.tech && <h3 className="text-2xl">{props.company}</h3>}
        <h4 className="text-2xl md:text-4xl font-light">{props.position}</h4>
        {props.tech && <p className="font-bold text-2xl mt-1">Tech Used</p>}
        <div className="flex justify-evenly space-x-2 my-2">
          {props.tech && (
            <SiJavascript className="h-6 w-6 md:h-10 md:w-10 text-[#f7df1b]" />
          )}
          {props.tech && (
            <DiCss3 className="h-6 w-6 md:h-10 md:w-10 text-[#264de4]" />
          )}
          {props.tech && (
            <DiHtml5 className="h-6 w-6 md:h-10 md:w-10 text-[#e54c20]" />
          )}
          {props.tech && (
            <DiReact className="h-6 w-6 md:h-10 md:w-10 text-[#67dbf9]" />
          )}
          {props.tech && (
            <FaNodeJs className="h-6 w-6 md:h-10 sm:w-10 text-[#7cc326]" />
          )}
          {/* tech used */}
          {/* tech used */}
          {/* tech used */}
          {/* tech used */}
        </div>
        <p className="uppercase py-2 md:py-5 text-gray-300">{props.date}</p>
        <ul className="list-disc space-y-2 md:space-y-4 ml-5 md:text-lg">
          <li>{props.pointOne}</li>
          <li>{props.pointTwo}</li>
          <li>{props.pointThree}</li>
          <li>{props.pointFour}</li>
          <li>{props.pointFive}</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
