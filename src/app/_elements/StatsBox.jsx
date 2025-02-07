"use client"

const StatsBox = (props) => {
  return (
    <>
      <a href={props.href} className="flex flex-col rounded-lg bg-secondary px-4 py-2 sm:py-8 text-center text-primary hover:scale-105 transition-transform mx-6 md:m-0">
        <dt className="order-last text-lg font-medium ">{props.title}</dt>
        <dd className="text-3xl sm:text-2xl font-extrabold md:text-5xl ">{props.text}</dd>
      </a>
    </>
  );
};

export default StatsBox;

