import Image from "next/image";
import { container, containerPadding, hr, titulo } from "../lib/classes";

import Img1 from "@/public/museos1.jpg";
import Img2 from "@/public/museos2.jpg";
import Img3 from "@/public/museos3.jpg";
import principal from "@/public/museo_principal.png";
import { catamaran, inter } from "../lib/fonts";

export default function Museos() {
  const imgStyle = "h-[84px] sm:h-[100px] md:h-[125px] lg:h-[172px] xl:h-[207px] mb-[1em]";

  return (
    <div className={`${containerPadding} text-[#222222]`}>
      <div className={`${container} ${catamaran.className}`}>
        <div className="flex flex-col items-center mb-[2em]">
          <p className={titulo}>ARTE Y MUSEOS</p>
          <hr className={hr} />
        </div>

        <div className="mb-[3em] sm:mb-[3.8em]">
          <Image
            src={principal.src}
            alt=""
            width={principal.width}
            height={principal.height}
            className="w-full mb-[2.3em]"
          />
          <p className={`${inter.className} mb-[1em] text-[1.5em] font-bold`}>Lorem ipsum dolor</p>
          <p className="leading-[1.75em] text-[#222222]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            tempor, augue vitae tempus euismod, massa odio egestas dolor, sit
            amet lobortis elit ante nec nibh. Curabitur facilisis vehicula
            dictum. Quisque tincidunt, urna ac scelerisque ultricies, ipsum eros
            placerat ipsum, quis eleifend metus diam at enim.
          </p>
        </div>

        <div className="flex justify-around flex-wrap sm:flex-nowrap gap-y-[4em] sm:gap-[1.2em] text-[0.75em] sm:text-[0.6em] mb-[2em]">
          <div className="text-center sm:w-1/3 w-[45%]">
            <Image
              src={Img1.src}
              alt=""
              width={Img1.width}
              height={Img1.height}
              className={imgStyle}
            />
            <b className="text-[1.25em]">Lorem Ipsum</b>
            <p className="text-[#222222]">Lorem ipsum dolor sit.</p>
          </div>
          <div className="text-center sm:w-1/3 w-[45%]">
            <Image
              src={Img2.src}
              alt=""
              width={Img2.width}
              height={Img2.height}
              className={imgStyle}
            />
            <b className="text-[1.25em]">Lorem Ipsum</b>
            <p className="text-[#222222]">Lorem ipsum dolor sit.</p>
          </div>
          <div className="text-center sm:w-1/3 w-[45%]">
            <Image
              src={Img3.src}
              alt=""
              width={Img3.width}
              height={Img3.height}
              className={imgStyle}
            />
            <b className="text-[1.25em]">Lorem Ipsum</b>
            <p>Lorem ipsum dolor sit.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
