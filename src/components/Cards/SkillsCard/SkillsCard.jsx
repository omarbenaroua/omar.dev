import './SkillsCard.css'
import { motion, useScroll} from "framer-motion";

import { useRef } from 'react';

const SkillsCard = (info) => {

  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target:ref,
    offset:["0 2", "0.5 1"],
  })
    return (
      <>
    <motion.div className="skills-card card bg-dark" ref={ref} style={{scale: scrollYProgress, opacity: scrollYProgress}}>
          <img src={info.img} className="card-img-top" alt={info.title}></img>
          <div className="card-body">
            <h5 className="card-title">{info.title}</h5>
            <div className="skill">
              {info.skills}
            </div>
          </div>
        </motion.div>
      </>
    );
  };
  
  export default SkillsCard