import NavItem from "./NavItem";
import { Button } from "./Buttons";
import { motion } from "framer-motion";

const Dropdown = () => {
  return (
    <div className="md:relative md:block">
      <motion.div className="absolute end-3.5 z-10 mt-8 w-52 divide-y bg-primary shadow-secondary rounded-md  shadow-lg"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
      >
        <div className="p-6 space-y-3 text-center">
          <NavItem title="Home" href="/" />
          <NavItem title="About" href="/about" />
          <NavItem title="Skills" href="/skills" />
          <NavItem title="Portfolio" href="/portfolio" />
          <NavItem title="Contact" href="/contact" />
        </div>
        <div className="md:block text-center p-3">
        <Button title="Download CV" href="/omardev/src/app/_assets/document/CV.png" download="Omar_ben_aroua_CV"/>
              </div>
      </motion.div>
    </div>
  );
};

export default Dropdown;
