import Image from "next/image";
import { catamaran } from "../lib/fonts";

export default function Panel({
  image,
  width,
  height,
  title,
  summary,
  className,
  ...props
}: {
  image: string;
  width: number;
  height: number;
  title: string;
  summary: string;
  className: string;
  onClick?: any;
}) {
  return (
    <div
      style={{ boxShadow: "0px 4px 8px 0px rgba(0, 0, 0, .5)" }}
      className={`${className} max-w-[130px] md:max-w-[150px] lg:max-w-[254px] hover:translate-y-[-7px] transition-transform duration-300`}
      {...props}
    >
      <img
        src={image}
        alt={title}
        width={width}
        height={height}
        className="
        w-[130px] md:w-[150px] lg:w-[254px] h-[109px] md:h-[125px] lg:h-[213px]"
        loading="lazy"
      />
      <div 
        className="px-[9px] lg:px-[16px] py-[11px] flex flex-col gap-[5px]
        text-[9px] md:text-[10px] lg:text-[14px] text-[#222222]"
      >
        <p className="text-[#ffa011] text-[10px] md:text-[11px] lg:text-[15px] uppercase font-bold">
          {title}
        </p>
        <p className={`${catamaran.className}`}>{summary}</p>
        <p className={`${catamaran.className} font-medium`}>
          Presiona para ver más
        </p>
      </div>
    </div>
  );
}
