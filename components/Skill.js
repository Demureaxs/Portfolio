import React from 'react';
import { motion } from 'framer-motion';

function Skill(props) {
  console.log(props);
  return (
    <motion.div
      initial={{
        x: props.isLeft ? -200 : 200,
        opacity: 0,
      }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      className=" relative flex cursor-pointer"
    ></motion.div>
  );
}

export default Skill;
