import Image from "next/image";
import { catamaran } from "../lib/fonts";

export default function Panel({
  image,
  width,
  height,
  title,
  summary,
  ...props
}: {
  image: string;
  width: number;
  height: number;
  title: string;
  summary: string;
  onClick?: any;
}) {
  return (
    <div
      style={{ boxShadow: "0px 4px 8px 0px rgba(0, 0, 0, .5)" }}
      className="max-w-[130px] md:max-w-[150px] lg:max-w-[254px] hover:translate-y-[-7px] transition-transform duration-300"
      {...props}
    >
      <Image
        src={image}
        alt={title}
        width={width}
        height={height}
        className="
        w-[130px] md:w-[150px] lg:w-[254px] h-[154px] md:h-[175px] lg:h-[213px]"
      />
      <div 
        className="px-[9px] lg:px-[16px] py-[11px] flex flex-col gap-[5px]
        text-[7px] md:text-[8px] lg:text-[12px] text-[#222222]"
      >
        <p className="text-[#ffa011] text-[8px] md:text-[9px] lg:text-[13px] uppercase font-bold">
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
