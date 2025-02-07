"use client"
import SkillsBox from "../_elements/SkillsBox";
import Title from "../_elements/Title";
import Data from "../_data/SkillsData";
import { useRef } from "react";
import { useScroll } from "framer-motion";
import {motion} from "framer-motion"

const Skills = () => {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target:ref,
    offset: ["0.2 1", "0.8 1"]
  })
  return (
    <div>
      <Title title="Skills" />
      <motion.div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 m-4 sm:m-6 md:m-32"
      ref={ref} style={{scale: scrollYProgress, opacity: scrollYProgress}}
      >
        {Data.map((data) => {
          return (
            <SkillsBox
              key={data.id}
              image={data.img}
              title={data.title}
              skills={data.skills}
            />
          );
        })}
      </motion.div>
    </div>
  );
};

export default Skills;
