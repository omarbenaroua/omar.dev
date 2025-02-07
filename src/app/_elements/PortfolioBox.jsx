import Image from "next/image";
import Link from "next/link";

const PortfolioBox = (props) => {
  return (
    <Link href={props.href} target="_blank" className="relative overflow-hidden rounded-lg transition-transform shadow-md hover:scale-105 hover:shadow-2xl hover:shadow-secondary">
        <Image
        key={props.id}
          src={props.image}
          alt="Portfolio image"
          width={3000}
          height={3000}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64 text-white">
          <div className="p-4 sm:p-6">
            <h3 className="mt-0.5 text-[10px] md:text-xl text-secondary">{props.title}</h3>
            <p className="block text-[10px] md:text-base">{props.year}</p>
            <div className=" flex space-x-1">
              {props.skills.map((data) => {
                return (
                  <Image
                  key={data.id}
                    src={data.img}
                    alt="img"
                    width={100}
                    height={100}
                    className="w-4 md:w-8"
                  />
                );
              })}
            </div>
            <p className="mt-2 transition-transform md:text-sm/relaxed text-[8px] line-clamp-4 hover:line-clamp-none">
              {props.text}
            </p>
          </div>
        </div>
    </Link>
  );
};

export default PortfolioBox;
