"use client";

import Image from "next/image";
import { MutableRefObject, RefObject, useEffect, useRef } from "react";
import { container, containerPadding, hr, loading, titulo } from "../lib/classes";
import { catamaran } from "../lib/fonts";

export default function Museos() {
  const ref = useRef(null);
  const observer: MutableRefObject<IntersectionObserver | null> =
    useRef<IntersectionObserver | null>(null);

  /*
  useEffect(() => {
    if (observer.current === null) {
      observer.current = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          
          console.log(entry);
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
          console.log(entry);
          console.log(entry.target.classList)
        })
      });
    }
    if (ref.current) {
      const museos = ref.current;
      observer.current.observe(museos);
      console.log("on observation");
    }
  }, [ref]);
  */

  return (
    <div
      ref={ref}
      className={`h-[372px] ${containerPadding} xs:h-[423px] sm:h-[273px]
      md:h-[333px] lg:h-[413px] xl:h-[478px] 2xl:h-[573px] relative z-0`}
    >
      <div className={`hidden sm:block ${container} z-0`}>
        <div className="flex">
          <div>
            <div className="sm:flex flex-col justify-center items-center">
              <p className={`${titulo} mx-[8px] sm:mx-0 text-nowrap`}>
                ARTE Y MUSEOS
              </p>
              <hr className={`${hr} ml-[19px] sm:ml-0`} />
            </div>

            <p
              className={`${catamaran.className} text-white mt-[24px] lg:mt-[44px] leading-[1.7em]`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              sed sodales neque, eu dapibus libero. Aliquam in purus efficitur,
              sollicitudin metus lacinia, vestibulum metus. Etiam non ante
              vehicula, sollicitudin felis quis, laoreet ipsum. Mauris sed
              vulputate mauris. Proin finibus nisi vitae facilisis placerat.
              Mauris tincidunt hendrerit imperdiet. Maecenas sollicitudin arcu
              ac fermentum vehicula. Nam quis quam velit. Integer id dui ipsum.
            </p>
          </div>
          {/**<ResizeImage
              src="/stock-photo-art-appreciators-view-paintings-in-museum-de-prado-prado-museum-madrid-spain-264032927.png"
              width={479}
              height={512}
              alt="Obras expuestas en museo"
              baseWidth={130}
              baseHeight={179}
              finalWidth={479}
              finalHeight={518}
            />*/}
          <Image
            src="/stock-photo-art-appreciators-view-paintings-in-museum-de-prado-prado-museum-madrid-spain-264032927.jpg"
            width={1500}
            height={996}
            alt="Obras expuestas en museo"
            className={`
              ${loading}
              ml-[12px] md:ml-[40px] mt-[32px]
              w-[120px] h-[179px]
              xs:w-[120px] xs:h-[220px]
              sm:w-[192px] sm:h-[207px]
              md:w-[255px] md:h-[276px]
              lg:w-[330px] lg:h-[357px]
              xl:w-[399px] xl:h-[432px]
              2xl:w-[479px] 2xl:h-[518px]`}
          />
        </div>
      </div>
      <div className={`sm:hidden ${container} z-0`}>
        <div className="flex flex-col">
          <div className="sm:flex flex-col justify-center items-center">
            <p className={`${titulo} mx-[8px] sm:mx-0 text-nowrap`}>
              ARTE Y MUSEOS
            </p>
            <hr className={`${hr} ml-[19px] sm:ml-0`} />
          </div>
          <Image
            src="/stock-photo-art-appreciators-view-paintings-in-museum-de-prado-prado-museum-madrid-spain-264032927.jpg"
            width={1500}
            height={996}
            alt="Obras expuestas en museo"
            className={`
            ${loading}
            mt-[18px] w-auto h-[200px] mx-auto`}
          />

          <p
            className={`${catamaran.className} text-white mt-[24px] lg:mt-[44px] leading-[1.7em]`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed
            sodales neque, eu dapibus libero. Aliquam in purus efficitur,
            sollicitudin metus lacinia, vestibulum metus. Etiam non ante
            vehicula, sollicitudin felis quis, laoreet ipsum. Mauris sed
            vulputate mauris. Proin finibus nisi vitae facilisis placerat.
            Mauris tincidunt hendrerit imperdiet. Maecenas sollicitudin arcu ac
            fermentum vehicula. Nam quis quam velit. Integer id dui ipsum.
          </p>
        </div>
        {/**<ResizeImage
              src="/stock-photo-art-appreciators-view-paintings-in-museum-de-prado-prado-museum-madrid-spain-264032927.png"
              width={479}
              height={512}
              alt="Obras expuestas en museo"
              baseWidth={130}
              baseHeight={179}
              finalWidth={479}
              finalHeight={518}
            />*/}
      </div>
      <div
        className="absolute w-full h-[329px] bg-[#ffbd59] top-[53px] sm:top-[43px] left-0 -z-10 
      xs:h-[380px] sm:h-[230px] 
      md:h-[290px] lg:h-[350px] 
      xl:h-[400px] 2xl:h-[495px] 
      md:top-[58px] lg:top-[78px]"
      ></div>
    </div>
  );
}
