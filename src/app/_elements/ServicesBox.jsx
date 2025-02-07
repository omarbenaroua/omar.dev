import Image from "next/image";

const ServicesBox = (props) => {
  return (
    <div>
      <div className="group relative block h-48 sm:h-80 lg:h-96" key={props.id}>
        <span className="absolute inset-0 border-2 border-dashed border-black"></span>
        <div className="relative flex h-full transform items-end border-2 border-black bg-secondary text-primary transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
          <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
            <Image src={props.image} alt="" width={80} height={100} className="animate-pulse"/>
            <h2 className="mt-4 text-xl font-medium sm:text-2xl">
              {props.title}
            </h2>
          </div>

          <div className="absolute p-2 md:p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
            <h3 className="mt-4 font-medium text-xl sm:text-xl lg:text-3xl ">
            {props.title}
            </h3>
            <p className="mt-4 text-[9px] lg:text-lg ">
            {props.text}
            </p>
            <a href="/skills" className="mt-8 text-xs font-bold animate-pulse">My skills</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesBox;
