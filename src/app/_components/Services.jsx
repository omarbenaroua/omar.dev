"use client"
import Title from "../_elements/Title"
import ServicesBox from "../_elements/ServicesBox"
import ServicesData from "../_data/ServicesData"
import { useRef } from "react";
import { useScroll } from "framer-motion";
import {motion} from "framer-motion"

const Services = () => {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target:ref,
    offset: ["0.2 1", "0.8 1"]
  })
  return (
    <div>
        <Title title="Services"/>
        <motion.div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 m-4 sm:m-6 md:m-32"
        ref={ref} style={{scale: scrollYProgress, opacity: scrollYProgress}}
        >
          {ServicesData.map((data, index) => {
            return(
              <ServicesBox key={`${data.id}-${index}`}  image={data.image} title={data.title} text={data.text}/>
            )
          })}
        </motion.div>
            </div>
  )
}

export default Services