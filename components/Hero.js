import { EDGE_UNSUPPORTED_NODE_APIS } from 'next/dist/shared/lib/constants';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from '../components/BackgroundCircles';
import Image from 'next/image';
import Link from 'next/link';

//https://scontent.fdps2-1.fna.fbcdn.net/v/t1.6435-9/72684910_10215600731674203_5990578388270579712_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_eui2=AeFAZzx0sX43YCdmpJfv71aSl9hQS0k8cnGX2FBLSTxycfcO5K8gaabY8cDcmAysLgA&_nc_ohc=onCB8e4q6LEAX-AMeZO&_nc_ht=scontent.fdps2-1.fna&oh=00_AfBs3on26rZmyqStgpW5UD1I2LecIyVL4EtXEHZ9ctiiNg&oe=64140AE1

function Hero() {
  const [text, count] = useTypewriter({
    words: ["Hi, I'm Martyn", '<Designer />', '<Coder />', '<Developer />'],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-6 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <div className="relative h-32 w-32 mx-auto object-cover overflow-hidden rounded-full">
        <Image
          className="absolute -top-52 h-[700px] w-[700px] object-cover"
          alt="Martyn Clarke"
          height={500}
          width={500}
          src="https://scontent.fdps2-1.fna.fbcdn.net/v/t39.30808-6/241049583_10218495370885442_1472116862498089112_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGRE2wFoj3bUxcQXd5_kotyP_pWhbTaT_k_-laFtNpP-RiM3YCPCrLN5id1G2bc50Y&_nc_ohc=w-bLMVdVgHoAX8EjGIS&tn=M9CzQmuy2-WAsl_a&_nc_ht=scontent.fdps2-1.fna&oh=00_AfAuN0O2eS6djiCIwD-YjDKp_NXbg6EOmXJdAnneTLiXCA&oe=63F1289E"
        />
      </div>
      <div className="z-10">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software Developer
        </h2>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold px-10 z-10">
          <span className="mr-1">{text}</span>
          <Cursor cursorColor="#f7ab0a" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
