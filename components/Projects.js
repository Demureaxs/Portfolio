/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

function Projects() {
  const projects = [
    {
      name: 'Restaurant.com',
      link: 'https://www.restaurant.com/',
      image:
        'https://drive.google.com/file/d/1pfJ8meLo0V8HCp4FBU_7hpcTTUgowAIZ/view?usp=sharing',
      description:
        'A restaurant website built with React, Node, Express, MongoDB, Mongoose, and Mongoose-Paginate.',
    },
  ];

  return (
    <motion.div
      initialize={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen relative flex overflow-hidden flex-col justify-center items-center text-center md:flex-row max-w-screen-xl mx-auto"
    >
      <h3 className="absolute top-20 sm:top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="w-full flex space-x-5 mb-16 overflow-x-scroll p-10 snap-x snap-mandatory z-10 scrollbar-thin scrollbar-track-gray-500/20 scrollbar-thumb-[#faab0a]/60">
        <div className="flex flex-col justify-center items-center w-full flex-shrink-0 mt-16 sm:mt-36 space-y-10 rounded-sm overflow-hidden snap-center">
          <motion.img
            initial={{
              y: -300,
              opacity: 0,
            }}
            transition={{ duration: 1 }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            viewport={{ once: true }}
            src="https://drscdn.500px.org/photo/1061848363/q%3D80_m%3D2000/v2?sig=0a1782e9ea232394e0cc15b13c36e27a6855acde7f4b10a85308fd9c55caeadc"
            width={400}
            height={400}
            alt="project"
            className="object-cover h-80 w-64 sm:h-[550px] sm:w-[500px] object-top"
          />
          <h3 className=" text-2xl md:text-3xl">Levelground</h3>
          <Link
            href="https://codepen.io/Martyn-Clarke/pen/gOjydgG"
            target="_blank"
            className="heroButton"
          >
            Visit the site
          </Link>
        </div>

        <div className="flex flex-col justify-center items-center flex-shrink-0 mt-16 sm:mt-36 w-full space-y-10 rounded-sm overflow-hidden snap-center">
          <motion.img
            initial={{
              y: -300,
              opacity: 0,
            }}
            transition={{ duration: 1 }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            viewport={{ once: true }}
            src="https://res.cloudinary.com/dggixfej5/image/upload/v1676469578/Portfolio/restaurantsite_n65bbb.jpg"
            width={400}
            height={400}
            alt="project"
            className="object-cover h-80 w-64 sm:h-[550px] sm:w-[500px] object-top"
          />
          <h3 className="text-2xl md:text-3xl">Restaurant.com</h3>
          <Link
            href="https://Restaurantcom.martynclarke.repl.co"
            target="_blank"
            className="heroButton"
          >
            Visit the site
          </Link>
        </div>
        {/* Projects */}
        {/* Projects */}
        {/* Projects */}
      </div>

      <div className="absolute top-[50%] w-full bg-[#f7ab0a]/10 h-[45%] sm:h-1/2 -translate-y-[62%] sm:-translate-y-1/2 -skew-y-6" />
    </motion.div>
  );
}

export default Projects;
