"use client"
import Image from "next/image";
import Img from "../_assets/images/01.png";
import BannerBox from "../_elements/BannerBox";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="overflow-hidden">
      <section>
        <div className="grid md:grid-cols-2">
          <BannerBox />
          <motion.div
            className="hidden sm:hidden md:flex justify-center bg-secondary rounded-full pt-6"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: [300 , 5] }}
            transition={{ duration: 0.5 }}
          >
              <Image src={Img} alt="Image" quality={100} className="w-auto h-[700px] md:h-auto" />
          </motion.div>
        </div>
      </section>
      <motion.div
            initial={{ y: 300 }}
            animate={{ y: [300 , -100] }}
            transition={{ duration: 0.5 }}
          >
            <div className="hidden md:block absolute left-2 bg-primary w-full h-80 bottom-[-340px] rotate-[-4deg] border-t-2 border-secondary overflow-hidden"> </div>
          </motion.div>
    </div>
  );
};

export default Banner;
