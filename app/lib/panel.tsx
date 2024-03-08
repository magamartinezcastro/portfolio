import Image from "next/image";
import { catamaran } from "./fonts";

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
      className="max-w-[254px] hover:translate-y-[-7px] transition-all duration-300"
      {...props}
    >
      <Image
        src={image}
        alt={title}
        width={width}
        height={height}
        className="w-[254px] h-[213px]"
      />
      <div className="px-[16px] py-[11px] flex flex-col gap-[5px] text-[8px] xs:text-[10px] md:text-[12px] text-[#222222]">
        <p className="text-[#ffb340] text-[9px] xs:[11px] md:text-[13px] uppercase font-bold">
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
