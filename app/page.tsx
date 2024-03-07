"use client";

import Image from "next/image";
import ResizeImage from "./lib/resizeImage";
import Panel from "./lib/panel";
import { catamaran } from "./lib/fonts";
import { useRef, useState } from "react";
import { RiArrowDropUpLine } from "react-icons/ri";
import Museos from "./museos";
import { button, container, hr, textSize, titulo } from "./lib/classes";
import Portada from "./portada";

export default function Home() {
  const [expandTrabajos, setExpandTrabajos] = useState(false);

  return (
    <main className={`min-h-screen bg-white text-black flex flex-col ${textSize}`}>
      <Image
        alt="Puesta de sol hermosa"
        src="/stock-vector-mountain-sunset-landscape-realistic-pine-forest-and-mountain-silhouettes-evening-wood-panorama-1410620021.jpg"
        width={1500}
        height={641}
        className="h-[191px] sm:h-[212px] md:h-[283px] lg:h-[365px] xl:h-[442px] 2xl:h-[531px] w-full"
      />
      <div className="flex flex-col md:gap-y-[107px] gap-y-[66px] mt-[28px] md:mb-[87px] mb-[46px]">
        <Portada />
        <div className="bg-[#efefef] px-[39px] py-[24px] sm:px-0">
          <div className={container}>
            <p className={titulo}>TRABAJOS</p>
            <hr className={hr} />

            <div
              className={`flex flex-wrap items-center justify-around 
              mt-[22px] gap-[30px] relative overflow-hidden ${
                expandTrabajos ? "" : "max-h-[900px]"
              } 
              `}
            >
              <Panel
                image="/Trabajos/Bicentenario_04.png"
                width={3508}
                height={2349}
                title="MUSEO DEL BICENTENARIO"
                summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              />
              <Panel
                image="/Trabajos/expo vinos 2011.png"
                width={2018}
                height={2992}
                title="EXPO REGIONAL"
                summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              />
              <Panel
                image="/Trabajos/tarjeton_1+1+1.png"
                width={378}
                height={548}
                title="1+1+1=TRES"
                summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              />
              <Panel
                image="/Trabajos/Sibiglia_Isologo.png"
                width={1222}
                height={645}
                title="SIBIGLIA BRANDING"
                summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              />
              <Panel
                image="/Trabajos/Yusti Moreira.png"
                width={3529}
                height={5906}
                title="YUSTI BARMAN"
                summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              />
              <Panel
                image="/Trabajos/thump_5320694sin-ttulo.png"
                width={151}
                height={200}
                title="ANGEL NIETO"
                summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              />
              <Panel
                image="/Trabajos/Sello Firenze color piel 015.png"
                width={1157}
                height={1157}
                title="FIRENZE CASA DE TE"
                summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              />
              <Panel
                image="/Trabajos/LOGO Centro Médico de la Piel.png"
                width={486}
                height={327}
                title="CENTRO MEDICO DE LA PIEL"
                summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              />
              <Panel
                image="/Trabajos/logo CIMA.png"
                width={578}
                height={427}
                title="FIRMAT CIMA"
                summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              />
              {expandTrabajos ? (
                <div className="w-full flex justify-center">
                  <button
                    onClick={() => setExpandTrabajos(false)}
                    className="flex items-center text-[12px] font-bold md:text-[20px]"
                  >
                    Cerrar
                    <RiArrowDropUpLine size="12px" className="md:hidden" />
                    <RiArrowDropUpLine size="20px" className="hidden md:block" />
                  </button>
                </div>
              ) : (
                <div
                  className="h-[178px] w-full absolute bottom-[-24px] 
              bg-gradient-to-t from-[#efefef] from-50% to-transparent to-90%
              flex justify-center items-center"
                >
                  <button
                    onClick={() => setExpandTrabajos(true)}
                    className={button}
                  >
                    Ver Más
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        <Museos />
      </div>
    </main>
  );
}
