import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

import half1 from "@/public/Assets/half1.svg";
import half2 from "@/public/Assets/half2.svg";
import bg from "@/public/Assets/bg.svg";
import useMeasure from "react-use-measure";
import { useWindowWidth } from "@react-hook/window-size";

export default function Slider() {
  const height =
    "h-[191px] sm:h-[212px] md:h-[283px] lg:h-[365px] xl:h-[442px] 2xl:h-[531px]";
  const absCenterX = (width  : number) => ({left: "50%", marginLeft: `-${Math.round(width/2)}px`});
  const absCenterY = (height : number) => ({top: "50%",  marginTop: `-${Math.round(height/2)}px`});
  const photos = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "6.jpg",
    "10.jpg",
    "12.jpg"
  ]
  const scroller = useRef(null);
  const half1Ref = useRef(null); // only for the forward arrow
  const half2Ref = useRef(null); // only for the forward arrow
  const [position, setPosition] = useState(0);
  const scrollInterval = useRef<NodeJS.Timeout | null>(null);

  const scrollForward = () => {
    if (scrollInterval.current !== null) {
      clearInterval(scrollInterval.current);
      scrollInterval.current = setInterval(() => {
        scrollForward();
        console.log(position);
      }, 2000);
    }

    setPosition(position => position < photos.length-1 ? position+1 : 0);
  }

  const scrollBackward = () => {
    if (scrollInterval.current !== null) {
      clearInterval(scrollInterval.current);
      scrollInterval.current = setInterval(() => {
        scrollForward();
        console.log(position);
      }, 2000);
    }
    
    setPosition(position => position > 0 ? position-1 : 0);
  }

  useEffect(() => {
    if (scrollInterval.current !== null)
      return;

    scrollInterval.current = setInterval(() => {
      scrollForward();
      console.log(position);
    }, 2000);
  }, [])

  return (
    <div className={`${height} w-full overflow-hidden relative`}>
      {/* =============== SCROLLER =============== */}
      <div 
        className="flex w-full z-0 relative transition-all duration-200"
        style={{marginLeft: `-${position * 100}%`}}
      >
        {photos.map((photo) => (
          <Image
            key={photo}
            alt=""
            src={`/Slider/${photo}`}
            width={5520}
            height={3105}
            className={`${height} shrink-0 w-full`}
          />
        ))}
      </div>


      {/* =============== SCROLL BACKWARD =============== */}
      <div className={`absolute w-[150px] left-0 h-[150px] z-10 flex items-center justify-center`} style={absCenterY(150)}>
        <button onClick={scrollBackward} className="relative z-10">
          <MdOutlineArrowBackIos size={35}/>
        </button>
        <div className="absolute w-[75px] h-[75px] z-0"  style={{...absCenterX(75), ...absCenterY(75)}}>
          <div className="absolute w-[75px] h-[75px]" style={{clipPath: "inset(0 0 0 37.5px)"}}>
            <img 
              src={half1.src}
              className="rotate-180 translate-x-[38px]"
              style={{transformOrigin: "center left"}}
            />
          </div>
          <div className="absolute w-[75px] h-[75px]" style={{clipPath: "inset(0 37.5px 0 0)"}}>
            <img
              src={half2.src}
              className="rotate-180"
              style={{transformOrigin: "center right"}}/>
          </div>
          <div className="absolute w-[75px] h-[75px]">
            <img
              src={bg.src}
            />
          </div>
        </div>
      </div>


      {/* =============== SCROLL FORWARD =============== */}
      <div className="absolute right-0 top-[50%] mt-[-75px] w-[150px] h-[150px] z-10 flex items-center justify-center">
        <button onClick={scrollForward} className="relative z-10">
          <MdOutlineArrowForwardIos size={35}/>
        </button>
        <div className="absolute w-[75px] h-[75px] z-0"  style={{...absCenterX(75), ...absCenterY(75)}}>
          <div className="absolute w-[75px] h-[75px]" style={{clipPath: "inset(0 0 0 37.5px)"}}>
            <img
              ref={half1Ref}
              src={half1.src}
              className="rotate-180 translate-x-[38px]"
              style={{transformOrigin: "center left"}}
            />
          </div>
          <div className="absolute w-[75px] h-[75px]" style={{clipPath: "inset(0 37.5px 0 0)"}}>
            <img
              ref={half2Ref}
              src={half2.src}
              className="rotate-180"
              style={{transformOrigin: "center right"}}/>
          </div>
          <div className="absolute w-[75px] h-[75px]">
            <img
              src={bg.src}
            />
          </div>
        </div>
      </div>
    </div>
  );
}