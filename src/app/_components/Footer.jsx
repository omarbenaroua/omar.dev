"use client";
import Image from "next/image";
import Logo from "../_assets/icons/logo.png";
import Logo1 from "../_assets/icons/logo_1.png";
import NavItem from "../_elements/NavItem";
import Social from "../_elements/Social";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div>
      <footer className="bg-primary">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex justify-center text-teal-600">
            <a className=" flex" href="/">
              <motion.div
                animate={{
                  x: [0, 55, 0],
                  scale: [1, 1],
                  rotate: [0, 180, 180, 0],
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  times: [0, 0.2, 0.5, 0.8, 1],
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              >
                <Image src={Logo} alt="" width={60} height={50} />
              </motion.div>
              <Image src={Logo1} alt="" width={200} height={200} />
            </a>
          </div>

          <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
            consequuntur amet culpa cum itaque neque.
          </p>

          <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12 text-gray md:text-gray">
            <NavItem title="Home" href="/" />
            <NavItem title="About" href="/about" />
            <NavItem title="Skills" href="/skills" />
            <NavItem title="Portfolio" href="/portfolio" />
          </ul>

          <ul className="mt-12 flex justify-center gap-6 md:gap-8">
            <Social />
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
