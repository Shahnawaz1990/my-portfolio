import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden h-screen`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-white p-8 rounded-2xl'
      >
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        {/* <p className="text-black text-2xl text-center underline">GET IN TOUCH</p><br /> */}
        <p className={styles.sectionSubText}>Name:       &nbsp;Shahnawaz Nazim Ali Hudani</p>
        <p className={styles.sectionSubText}>Call/Whatsapp:       &nbsp;03162334509 </p>
        <p className={styles.sectionSubText}>Email:       &nbsp;shahnawaz.nazimali@gmail.com </p>

  
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
