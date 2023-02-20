import React from 'react';
import { motion } from 'framer-motion';

//https://scontent.fdps2-1.fna.fbcdn.net/v/t39.30808-6/241049583_10218495370885442_1472116862498089112_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGRE2wFoj3bUxcQXd5_kotyP_pWhbTaT_k_-laFtNpP-RiM3YCPCrLN5id1G2bc50Y&_nc_ohc=w-bLMVdVgHoAX8EjGIS&tn=M9CzQmuy2-WAsl_a&_nc_ht=scontent.fdps2-1.fna&oh=00_AfAuN0O2eS6djiCIwD-YjDKp_NXbg6EOmXJdAnneTLiXCA&oe=63F1289E

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-screen-xl px-10 mx-auto justify-center gap-6 md:gap-0 lg:gap-20 items-center"
    >
      <h3 className="absolute top-20 md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className=" relative mt-20 w-32 h-32 md:w-96 md:mt-16 rounded-full overflow-hidden md:h-96 md:rounded-md flex-shrink-0"
      >
        <motion.img
          className="absolute -top-52 h-[700px] w-[700px] xl:h-full xl:w-full xl:top-0 object-cover "
          src="https://scontent.fdps2-1.fna.fbcdn.net/v/t39.30808-6/241049583_10218495370885442_1472116862498089112_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGRE2wFoj3bUxcQXd5_kotyP_pWhbTaT_k_-laFtNpP-RiM3YCPCrLN5id1G2bc50Y&_nc_ohc=j_ptBe_IxPMAX-FJGlS&_nc_ht=scontent.fdps2-1.fna&oh=00_AfAOST7DB3f_BzJ6spuPQP6HorJlncll9nSn1b2sZHryIg&oe=63F7175E"
        />
      </motion.div>

      <motion.div
        initial={{
          x: 200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className=" space-y-4 md:space-y-10 md:mt-16 px-0 md:px-10 lg:max-w-[45%]"
      >
        <h4 className="text-4xl font-semibold">
          Here is a{' '}
          <span className="underline decoration-[#f7ab0a]/50">little</span>{' '}
          background
        </h4>
        <p className=" text-xs md:text-base leading-7">
          Originally from the UK, I have a passion for creating and love to
          spend time bringing things into existence. Here you can find a
          collection of my work during my time in development as well links to
          other creative avenues I have explored over the years.
        </p>
      </motion.div>
    </motion.div>
  );
}

export default About;
