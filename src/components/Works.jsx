import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  git,
  image,
  source_code_link,
  follow,
  follow_link,
  video,
  video_link,
  deploy,
  dep_link,
}) => {
  return (
    // <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    // >
    //   <Tilt
    //     options={{
    //       max: 25,
    //       scale: 1,
    //       speed: 450,
    //     }}
    <div
      className={`${name === "Todo App" ? 'bg-tertiary p-5 rounded-2xl w-full ' : 'bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'}`}
    >
      <div className={`${name === "Todo App" ? 'relative w-full h-[430px]' : 'relative w-full h-[230px]'}`}>
        <img
          src={image}
          alt='project_image'
          className='w-full h-full rounded-2xl'
        />


      </div>

      <div className='mt-5 flex'>
        <h3 className='text-white font-bold text-[24px]'>{name}</h3>
      </div>
      {follow &&
        <div className='flex justify-center items-center'>
          <div className='float-left'>
            <p className='mt-2 text-white text-[14px]'>{follow}</p>
          </div>
          <div
            onClick={() => window.open(follow_link, "_blank")}
            className='black-gradient w-10 h-10 rounded-full justify-center items-center cursor-pointer flex ml-2'
          >
            <img
              src={github}
              alt='source code'
              className='w-1/2 h-1/2 object-contain'
            />
          </div>
        </div>
      }
      <div className='flex justify-center items-center'>
        <div className='float-left'>
          <p className='mt-2 text-white text-[14px]'>{git}</p>
        </div>
        <div
          onClick={() => window.open(source_code_link, "_blank")}
          className='black-gradient w-10 h-10 rounded-full justify-center items-center cursor-pointer flex ml-2'
        >
          <img
            src={github}
            alt='source code'
            className='w-1/2 h-1/2 object-contain'
          />
        </div>
      </div>

      <div className='flex justify-center items-center'>
        <div className='float-left'>
          <p className='mt-2 text-white text-[14px]'>{video}</p>
        </div>
        <div
          onClick={() => window.open(video_link, "_blank")}
          className='black-gradient w-10 h-10 rounded-full justify-center items-center cursor-pointer flex ml-2'
        >
          <img
            src={github}
            alt='source code'
            className='w-1/2 h-1/2 object-contain'
          />
        </div>
      </div>

      {deploy &&
        <div className='flex justify-center items-center'>
          <div className='float-left'>
            <p className='mt-2 text-white text-[14px]'>{deploy}</p>
          </div>
          <div
            onClick={() => window.open(dep_link, "_blank")}
            className='black-gradient w-10 h-10 rounded-full justify-center items-center cursor-pointer flex ml-2'
          >
            <img
              src={github}
              alt='source code'
              className='w-1/2 h-1/2 object-contain'
            />
          </div>
        </div>}
    </div>

    //   {/* </Tilt>
    // </motion.div> */}
  );
};

const Works = () => {
  return (
    <>
      {/* <motion.div variants={textVariant()}> */}
      <div>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
        {/* </motion.div> */}
      </div>
      <div className='w-full flex'>
        {/* <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          
        > */}<p className='mt-3 text-primary text-[17px] max-w-3xl leading-[30px]'>
          I have followed Project Based Learning Approach to learn NextJS along with FastAPI, OpenAI & Langchain. Therefore, I have followed several project based tutorials from Youtube mostly from Channel: CodeWithHarry, CodeWithAntonio and so on. <span className="font-bold">However I haven't developed any project on my own except Todo APP which was our class assignment. </span>I have developed its backend in FastAPI, Postgres Neon and Front End in NextJS. Other Projects have been followed from various Youtube Courses Videos.
          {/* </motion.p> */}
        </p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "project");
