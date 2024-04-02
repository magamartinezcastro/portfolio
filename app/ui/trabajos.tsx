import Image from "next/image";
import {
  titulo,
  textSize,
  container,
  hr,
  containerPadding,
  highlight,
} from "../lib/classes";
import { ReactNode, useEffect, useRef, useState } from "react";
import { catamaran, inter } from "../lib/fonts";
import Panel from "./panel";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { Modal } from "antd";
import useMeasure from "react-use-measure";
import ReactDOM from "react-dom/server";

function DetailsModal(data: any) {
  const imagen = data.image;
  const titulo = data.title;
  const extDesc = data.extendedDescription;

  return (
    <>
      <div
        className={`w-[219px] sm:w-[250px] md:w-[350px] lg:w-[490px] xl:w-[700px] ${textSize} ${catamaran.className} mx-auto flex flex-col gap-[21px] xl:gap-[40px] py-[30px] xl:py-[40px]`}
      >
        <p
          className={`${titulo} text-[1.7em] ${highlight} text-center ${inter.className}`}
        >
          {data.title}
        </p>
        <img
          src={imagen.src}
          alt={titulo}
          width={imagen.width}
          height={imagen.height}
          className="w-auto max-h-[50vh] mx-auto" 
        />
        <p className={`text-[#222222]`}>{extDesc}</p>
      </div>
    </>
  );
}

import { trabajos } from "./trabajos_datos";

export function Trabajos() {
  const [expandTrabajos, setExpandTrabajos] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const modalContentStr = useRef<string | null>(null);
  const modalContentRef = useRef<HTMLDivElement | null>(null);
  const [ref, { width }] = useMeasure();

  const openModal = (data: any) => {
    setModalOpen(true);
    modalContentStr.current = ReactDOM.renderToString(DetailsModal(data));
  };

  const closeModal = () => {
    setModalOpen(false);
    modalContentStr.current = null;
  };

  useEffect(() => {
    if (!isModalOpen) {
      return;
    }

    const modalContent = modalContentRef.current;
    const content = modalContentStr.current;
    if (modalContent === null || content === null) {
      return;
    }
    modalContent.innerHTML = content;
  }, [isModalOpen]);

  return (
    <div
      ref={ref}
      className={`bg-[#efefef] ${containerPadding} py-[24px]`}
      id="trabajos"
    >
      <div className={container}>
        <p className={`${titulo} text-[#ffa011]`}>TRABAJOS</p>
        {/*<hr className={hr} />*/}

        <div className="mb-[40px] transition-all duration-1000 relative">
          {/*<div className="flex flex-wrap items-center justify-around mt-[20px] md:mt-[39px] gap-[8px] gap-y-[15px] lg:gap-[30px] lg:gap-y-[30px]">*/}
          <div className="grid grid-cols-2 sm:grid-cols-3 justify-items-center last:cols-span-2 sm:last:col-span-1 mt-[20px] md:mt-[39px] gap-[8px] gap-y-[15px] lg:gap-[30px] lg:gap-y-[30px]">
            {trabajos.map((data) => {
              const imagen = data.image;
              const titulo = data.title;
              const desc = data.description;
              return (
                <Panel
                  key={titulo}
                  image={imagen.src}
                  width={imagen.width}
                  height={imagen.height}
                  title={titulo}
                  summary={desc}
                  onClick={() => openModal(data)}
                  className="last:cols-span-2 sm:last:col-span-1"
                />
              );
            })}
            {/*
            <Panel
              image="/Trabajos/Nuevo/Abra.jpg"
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
            */}
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
      </div>
    </div>
  );
}
