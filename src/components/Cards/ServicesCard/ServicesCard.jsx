import "./ServicesCard.css";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";


function ServicesCard (props) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 2", "0.5 1"],
  });
  return (
    <>
    <motion.div
            className="services-card card text-center"
            ref={ref}
            style={{ scale: scrollYProgress, opacity: scrollYProgress }}
    >
        <div className="card-body bg-dark">
        <img src={props.img} alt="" />
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text text-start">
          {props.text}
          <div className="punto"></div>
          </p>
        </div>
      </motion.div>
    </>
  );
}

export default ServicesCard;
