import React from "react";
import SkillCard from "../components/SkillCard";
import { motion } from "framer-motion";
import { RevealText } from "../components/RevealText";
import {
  DiJavascript1,
  DiReact,
  DiHtml5,
  DiCss3,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiGithubBadge,
} from "react-icons/di";
import {
  SiTailwindcss,
  SiMysql,
  SiRedux,
  SiExpress,
  SiSpringboot,
} from "react-icons/si";
import { FaJava, FaProjectDiagram } from "react-icons/fa";
import ShinnyLine from "../components/ShinnyLine";

const size = window.innerWidth <= 768 ? 20 : 50;

function SkillsSection() {
  const skills = [
    // Frontend
    { name: "React", icon: <DiReact size={size} /> },
    { name: "Redux", icon: <SiRedux size={size} /> },
    { name: "JavaScript", icon: <DiJavascript1 size={size} /> },
    { name: "Tailwindcss", icon: <SiTailwindcss size={size} /> },
    { name: "HTML", icon: <DiHtml5 size={size} /> },
    { name: "CSS", icon: <DiCss3 size={size} /> },

    // Backend
    { name: "Core Java", icon: <FaJava size={size} /> },
    { name: "Spring Boot", icon: <SiSpringboot size={size} /> },
    { name: "Microservices", icon: <FaProjectDiagram size={size} /> },
    { name: "Nodejs", icon: <DiNodejs size={size} /> },
    { name: "Express.js", icon: <SiExpress size={size} /> },

    // Database & tools
    { name: "MongoDB", icon: <DiMongodb size={size} /> },
    { name: "MySQL", icon: <SiMysql size={size} /> },
    { name: "Git", icon: <DiGit size={size} /> },
    { name: "GitHub", icon: <DiGithubBadge size={size} /> },
  ];

  return (
    <section className="relative flex flex-col gap-4 p-4" id="skills">
      <div className="font-bold text-3xl uppercase flex gap-3 flex-col justify-center items-center">
        {/* skill div  */}
        <div className="flex gap-10 justify-center items-center">
          <span className="rotate-180">
            <ShinnyLine />
          </span>
          <span>
            <RevealText text={"Skills"} />
          </span>
          {/* shinny line animation  */}
          <ShinnyLine />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, staggerChildren: 0.1 }}
          className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-16 gap-y-3 text-base place-items-center"
        >
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.name}
              skill={skill.name}
              icon={skill.icon}
              delay={index * 0.1}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default SkillsSection;