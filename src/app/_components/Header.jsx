"use client";
import { useState } from "react";
import Image from "next/image";
import Logo from "../_assets/icons/logo.png";
import Logo1 from "../_assets/icons/logo_1.png";
import NavItem from "../_elements/NavItem";
import BurgerIcon from "../_assets/icons/burger-bar.png";
import Dropdown from "../_elements/Dropdown";
import { motion } from "framer-motion";
import { Button } from "../_elements/Buttons";

const Header = () => {
  const [burger, setBurger] = useState(false);
  const openBurger = () => {
    setBurger(burger ? false : true);
  };
  return (
    <div className="shadow-down relative z-10">
      <header className="bg-primary">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between ">
            <div className="flex-1 md:flex md:items-center md:gap-12 ">
              <a className=" flex" href="/">
                <motion.div
                  animate={{
                    x: [0, 52, 0],
                    scale: [1, 1],
                    rotate: [0, 180, 180, 0],
                  }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1],
                  }}
                >
                <Image src={Logo} alt="" width={60} height={50} />
                </motion.div>
                <motion.div
                  animate={{
                    y: [-52, 0],
                    scale: [1, 1],
                  }}
                  transition={{
                    duration: 0.9,
                  }}
                >
                <Image src={Logo1} alt="" width={180} height={10} />
                </motion.div>
              </a>
            </div>
            {burger ? (
              " "
            ) : (
              <div className="px-2 md:block hidden">
                <Button title="Download CV" href="/omardev/src/app/_assets/document/CV.png" download="Omar_ben_aroua_CV"/>
              </div>
            )}

            <div className="md:flex md:items-center md:gap-12 text-gray">
              <nav className="hidden md:block">
                <ul className="flex items-center gap-6 text-sm">
                  <p>{burger}</p>
                  <NavItem title="Home" href="/" />
                  <NavItem title="About" href="/about" />
                  <NavItem title="Skills" href="/skills" />
                  <NavItem title="Portfolio" href="/portfolio" />
                  <NavItem title="Contact" href="/contact" />
                </ul>
              </nav>
              {burger && <Dropdown />}
              <div className="block md:hidden">
                <button
                  className="rounded bg-secondary p-2"
                  onClick={openBurger}
                >
                  <Image src={BurgerIcon} alt="" width={20} height={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
