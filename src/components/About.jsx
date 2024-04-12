import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-primary text-[17px] max-w-3xl leading-[30px]'
      >
        I am Commerce Graduate having 10+ Years of Experience of Managing Accounts & Finance. Since childhood, I always wanted to become Software Engineer but due to certain circumstances I could not afford to study Software-Engineering. Throughout my career, I have implemented various Accounting Systems such as Quickbooks, Tally and Customized Accounting Softwares for my employers. I always wondered to learn Programming to develop ERP System on my own so I can have complete control over developing and managing a Reporting System according to Organization Requirement and Decision Making Purpose. I have been watching Tutorials for Programming in PHP, C++ and so on without any direction from Expert Teacher. Finally, I decided to hire a Tutor who can teach me Software Engineering then I found Linkedin Profile of Sir Zia Khan. I immediately took admission in PIAIC Batch 42. I have followed roadmap given by Sir Zia Khan and now I am able to make Full Stack and Generative AI projects. I believe I will become highly competent Cloud Applied Generative AI Engineer by the end of this course.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
