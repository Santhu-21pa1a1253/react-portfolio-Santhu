import React from "react";
import Abpic from "../assets/NENE.jpg";
import { motion } from "framer-motion";
import "./About.css";

const About = () => {
  return (
    <div className=" pb-4">
      <h2 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h2>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="Abt flex items-center justify-center">
            <img className="rounded-2xl" src={Abpic} alt="About Pic" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 1, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 maxw-xl py-6">
              I am a dedicated and versatile full stack developer and a data
              analyst with a passion for creating efficient and user-friendly
              web applications and some useful insights for the buisness
              intelligence. I have worked with a variety of technologies,
              including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB.
              My journey in web development began with a deep curiosity for how
              things work, and it has evolved into a career where I continuously
              strive to learn and adapt to new challenges. I thrive in
              collaborative environments and enjoy solving complex problems to
              deliver high-quality solutions. My Journey in Data Analytics begin
              with a impression over the role and the importance of that role
              for thriving of buisnesses.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
