"use client";

import Image from "next/image";
import ResizeImage from "./lib/resizeImage";
import Panel from "./lib/panel";
import { catamaran } from "./lib/fonts";
import { useEffect, useRef, useState } from "react";
import { RiArrowDropUpLine, RiArrowDropDownLine } from "react-icons/ri";
import Museos from "./museos";
import { button, container, hr, textSize, titulo } from "./lib/classes";
import Portada from "./portada";
import { Trabajos } from "./trabajos";
import { RxCross2 } from "react-icons/rx";
import { Modal } from "antd";
import useMeasure from "react-use-measure";
import { animated } from "@react-spring/web";
import React from 'react';

import ReactDOM from "react-dom/server";

export default function About() {
  const [expandTrabajos, setExpandTrabajos] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  // const openModal = useRef(false);
  const modalContentId = useRef<string | null>(null);
  const modalContentRef = useRef<HTMLDivElement | null>(null);
  const [ref, { width }] = useMeasure();

  const openModal = (contentId: string) => {
    setModalOpen(true);
    modalContentId.current = contentId;
  };

  const closeModal = () => {
    setModalOpen(false);
    modalContentId.current = null;
  };

  useEffect(() => {
    if (!isModalOpen) {
      return;
    }

    const modalContent = modalContentRef.current;
    const contentId = modalContentId.current;
    if (modalContent === null || contentId === null) {
      return;
    }
    const content = ReactDOM.renderToString(Trabajos[contentId]);
    modalContent.innerHTML = content;
  }, [isModalOpen]);

  return (
    <main
      ref={ref}
      className={`min-h-screen bg-white text-black flex flex-col ${textSize}`}
    >
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
          <animated.div className={container}>
            <p className={titulo}>TRABAJOS</p>
            <hr className={hr} />

            <div
              className={`overflow-hidden transition-all duration-1000 relative ${
                expandTrabajos ? "max-h-[3500px]" : "max-h-[900px]"
              }`}
            >
              <div className="flex flex-wrap items-center justify-around mt-[22px] gap-[30px]">
                <Panel
                  image="/Trabajos/Bicentenario_04.jpg"
                  width={3508}
                  height={2349}
                  title="MUSEO DEL BICENTENARIO"
                  summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  onClick={() => openModal("bicentenario")}
                />
                <Panel
                  image="/Trabajos/expo vinos 2011.png"
                  width={2018}
                  height={2992}
                  title="EXPO REGIONAL"
                  summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  onClick={() => openModal("expoVinos")}
                />
                <Panel
                  image="/Trabajos/tarjeton_1+1+1.png"
                  width={378}
                  height={548}
                  title="1+1+1=TRES"
                  summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  onClick={() => openModal("unoMasUno")}
                />
                <Panel
                  image="/Trabajos/Sibiglia_Isologo.png"
                  width={1222}
                  height={645}
                  title="SIBIGLIA BRANDING"
                  summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  onClick={() => openModal("sibiglia")}
                />
                <Panel
                  image="/Trabajos/Yusti Moreira.png"
                  width={3529}
                  height={5906}
                  title="YUSTI BARMAN"
                  summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  onClick={() => openModal("yustiMoreira")}
                />
                <Panel
                  image="/Trabajos/thump_5320694sin-ttulo.png"
                  width={151}
                  height={200}
                  title="ANGEL NIETO"
                  summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  onClick={() => openModal("angelNieto")}
                />
                <Panel
                  image="/Trabajos/Sello Firenze color piel 015.png"
                  width={1157}
                  height={1157}
                  title="FIRENZE CASA DE TE"
                  summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  onClick={() => openModal("firenze")}
                />
                <Panel
                  image="/Trabajos/LOGO Centro Médico de la Piel.png"
                  width={486}
                  height={327}
                  title="CENTRO MEDICO DE LA PIEL"
                  summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  onClick={() => openModal("centroPiel")}
                />
                <Panel
                  image="/Trabajos/logo CIMA.png"
                  width={578}
                  height={427}
                  title="FIRMAT CIMA"
                  summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  onClick={() => openModal("firmatCima")}
                />
              </div>
              <div
                className={`${
                  expandTrabajos ? "opacity-0 -z-10" : "opacity-100 z-0"
                } h-[128px] w-full absolute bottom-[-24px] bg-gradient-to-t from-[#efefef] 
                from-50% to-transparent to-60% flex justify-center items-end pb-[24px]
                transition-opacity duration-1000`} // misma duracion que la animacion del contenedor
                                                   // para que aparezca a lo ultimo y no antes
              >
                <button
                  onClick={() => setExpandTrabajos(true)}
                  className="flex items-center text-[12px] font-bold md:text-[20px]"
                >
                  Ver Más
                  <RiArrowDropDownLine size="12px" className="md:hidden" />
                  <RiArrowDropDownLine
                    size="20px"
                    className="hidden md:block"
                  />
                </button>
              </div>
              <div
                className={`${
                  expandTrabajos ? "opacity-100 z-0" : "opacity-0 -z-10"
                } w-full flex justify-center items-center transition-opacity duration-100`}
              >
                <button
                  onClick={() => {setTimeout(() => {}, 1000); setExpandTrabajos(false)}}
                  className="flex items-center text-[12px] font-bold md:text-[20px] mt-[22px]"
                >
                  Cerrar
                  <RiArrowDropUpLine size="12px" className="md:hidden" />
                  <RiArrowDropUpLine size="20px" className="hidden md:block" />
                </button>
              </div>
              <Modal
                open={isModalOpen}
                onCancel={() => setModalOpen(false)}
                onOk={closeModal}
                footer={null}
                width={
                  width <= 576
                    ? 300
                    : width <= 768
                    ? 356
                    : width <= 992
                    ? 450
                    : width <= 1200
                    ? 672
                    : 850
                }
              >
                <div ref={modalContentRef}>a</div>
              </Modal>
            </div>
          </animated.div>
        </div>
        <Museos />
      </div>
    </main>
  );
}
