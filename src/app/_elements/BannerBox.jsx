import { Button, ButtonSecondary } from "./Buttons";
import Social from "./Social";
import { motion } from "framer-motion";

const BannerBox = () => {
  return (
    <div>
      <div className="relative mx-auto max-w-screen-xl px-4 py-32 2xl:pt-3 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="ltr:sm:text-left rtl:sm:text-right text-white">
          <div className="text-4xl leading-tight font-extrabold sm:text-5xl 2xl:text-6xl 2xl:leading-relaxed text-center md:text-start">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: [-300, 5] }}
              transition={{ duration: 0.3 }}
            >
              <h1>
                Hello<span className="text-secondary">,</span> Welcome
              </h1>
              Im Omar Ben Aroua
              <h1 className="block font-extrabold">
                And I<span className="text-secondary">'</span>m a{" "}
                <span className="text-secondary">Front-End Developer</span>
              </h1>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: [-300, 5] }}
            transition={{ duration: 1 }}
            className="text-center md:text-start"
          >
            <p className="mt-4 max-w-lg sm:text-xl/relaxed">
              Specialized in <span className="text-secondary">React</span> and{" "}
              <span className="text-secondary">Next.js</span>.
            </p>
            <Social />
            <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
              <Button title="Explore my skills" href="/skills" />
              <ButtonSecondary title="Contact me" href="/contact" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BannerBox;
