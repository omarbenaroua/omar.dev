import React from "react";

const Title = (props) => {
  return (
    <div className="z-10 relative md:pt-32 flex flex-col items-center">
      <div className="justify-center border-b-4 border-secondary inline-block relative mb-10 shadow-title ">
        <h1 className="hover:animate-bounce text-3xl font-extrabold sm:text-6xl 2xl:text-6xl 2xl:leading-relaxed hover:translate-y-[-2px] hover:text-secondary transition duration-200">
          {props.title}
        </h1>
      </div>
    </div>
  );
};

export default Title;
