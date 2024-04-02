import Image from "next/image";
import { Suspense, useEffect, useRef, useState } from "react";

import arrowForward from "@/public/Assets/arrowForward.svg";
import arrowForward2 from "@/public/Assets/arrowForward2.svg";
import useMeasure from "react-use-measure";

import Foto1 from "@/public/Slider/NuevoNuevo/1.png";
import Foto2 from "@/public/Slider/NuevoNuevo/3.jpg";
import Foto3 from "@/public/Slider/NuevoNuevo/3.png";
import Foto4 from "@/public/Slider/NuevoNuevo/4.jpg";
import Foto5 from "@/public/Slider/NuevoNuevo/4.png";
import Foto6 from "@/public/Slider/NuevoNuevo/5.png";
import Foto7 from "@/public/Slider/NuevoNuevo/6.png";
import Foto8 from "@/public/Slider/NuevoNuevo/1.jpg";

export default function Slider() {
  const height = "h-auto max-h-[90vh]"
  const height2 =
    "h-[311px] sm:h-[332px] md:h-[403px] lg:h-[485px] xl:h-[562px] 2xl:h-[651px]";
  const height1 =
    "h-[191px] sm:h-[212px] md:h-[283px] lg:h-[365px] xl:h-[442px] 2xl:h-[531px]";
  const absCenterX = (width: number) => ({
    left: "50%",
    marginLeft: `-${Math.round(width / 2)}px`,
  });
  const absCenterY = (height: number) => ({
    top: "50%",
    marginTop: `-${Math.round(height / 2)}px`,
  });
  const photos = [
    Foto1,
    Foto2,
    Foto3,
    Foto4,
    Foto5,
    Foto6,
    Foto7,
    Foto8,
  ];
  const themes = ["light", "dark", "light", "light", "light", "light", "dark", "light"];
  const [position, setPosition] = useState(0);
  const scrollInterval = useRef<NodeJS.Timeout | null>(null);
  const scrollTime = 3500;
  const active = "opacity-80";
  const [ref, { width }] = useMeasure();

  const scrollForward = () => {
    if (scrollInterval.current !== null) {
      clearInterval(scrollInterval.current);
      scrollInterval.current = setInterval(() => {
        scrollForward();
      }, scrollTime);
    }

    setPosition((position) =>
      position < photos.length - 1 ? position + 1 : 0
    );
  };

  const scrollBackward = () => {
    if (scrollInterval.current !== null) {
      clearInterval(scrollInterval.current);
      scrollInterval.current = setInterval(() => {
        scrollForward();
      }, scrollTime);
    }

    setPosition((position) => (position > 0 ? position - 1 : 0));
  };

  const scrollTo = (position_: number) => {
    if (scrollInterval.current !== null) {
      clearInterval(scrollInterval.current);
      scrollInterval.current = setInterval(() => {
        scrollForward();
      }, scrollTime);
    }

    setPosition(position_);
  };

  useEffect(() => {
    if (scrollInterval.current !== null) return;

    scrollInterval.current = setInterval(() => {
      scrollForward();
    }, scrollTime);
  }, []);

  return (
    <div
      ref={ref}
      className={`${height} group w-full overflow-hidden relative`}
    >
      {/* =============== SCROLLER =============== */}
      <div
        className="flex w-full z-0 relative transition-all duration-1000 ease-in"
        style={{ marginLeft: `-${position * 100}%` }}
      >
        {photos.map((photo, index) => (
          <Image
            key={`foto${index+1}`}
            alt=""
            src={`/Slider/NuevoNuevo/${photo.src}`}
            width={5520}
            height={3105}
            className={`${height} shrink-0 w-full`}
          />
        ))}
      </div>

      {/* =============== SCROLL BACKWARD =============== */}
      <div
        className="absolute left-0 ml-[18px] z-10 flex items-center
        justify-center opacity-0 group-hover:opacity-100 transition-all
        duration-150"
        style={absCenterY(
          width <= 768 ? 15 : width <= 992 ? 25 : arrowForward.height
        )}
      >
        <button onClick={scrollBackward} className="relative">
          <Image
            src={
              themes[position] == "dark" ? arrowForward.src : arrowForward2.src
            }
            alt=""
            width={arrowForward.width}
            height={arrowForward.height}
            className="rotate-180 opacity-60 hover:opacity-80 h-[15px] md:h-[25px] lg:h-auto"
          />
        </button>
      </div>

      {/* =============== SCROLL FORWARD =============== */}
      <div
        className="absolute right-0 mr-[18px] z-10 flex items-center
        justify-center opacity-0 group-hover:opacity-100 transition-all
        duration-150"
        style={absCenterY(
          width <= 768 ? 15 : width <= 992 ? 25 : arrowForward.height
        )}
      >
        <button onClick={scrollForward} className="relative">
          <Image
            src={
              themes[position] == "dark" ? arrowForward.src : arrowForward2.src
            }
            alt=""
            width={arrowForward.width}
            height={arrowForward.height}
            className="opacity-60 hover:opacity-80 h-[15px] md:h-[25px] lg:h-auto"
          />
        </button>
      </div>

      {/* =============== INDICATORS =============== */}
      <div
        className="absolute bottom-[23px] flex gap-[12px] md:gap-[16px] lg:gap-[20px] opacity-0
        group-hover:opacity-100 transition-all duration-150"
        style={absCenterX(
          width <= 768 ? photos.length * 20 + (photos.length - 1) * 12 :
          width <= 992 ? photos.length * 35 + (photos.length - 1) * 16:
          photos.length * 50 + (photos.length - 1) * 20)}
      >
        {photos.map((_, index) => (
          <hr
            key={`indicator${index}`}
            className={`w-[20px] md:w-[35px] lg:w-[50px] h-[4px] opacity-50 
            ${themes[position] == "dark" ? "bg-white" : "bg-[#474141]"}
            ${index == position ? active : ""} 
            border-0 hover:${active} cursor-pointer`}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
}
