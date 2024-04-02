import Image from "next/image";
import {
  titulo,
  textSize,
  container,
  hr,
  containerPadding,
  highlight,
} from "../lib/classes";
import { useState } from "react";
import { catamaran, inter } from "../lib/fonts";
import Panel from "./panel";
import { Modal } from "antd";
import useMeasure from "react-use-measure";

import { trabajos } from "./trabajos_datos";

export function Trabajos() {
  const [whichModal, setWhichModal] = useState<number | null>(null);
  const [ref, { width }] = useMeasure();

  const openModal = (which: number) => {
    setWhichModal(which);
  };

  const closeModal = () => {
    setWhichModal(null);
  };

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
            {trabajos.map((data, index) => {
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
                  onClick={() => openModal(index)}
                  className="last:cols-span-2 sm:last:col-span-1"
                />
              );
            })}
          </div>
          {trabajos.map((data, index) => {
            const imagen = data.modalImage;
            const titulo = data.title;
            const extDesc = data.extendedDescription;
            return (
              <Modal
                key={`modal${index+1}`}
                open={whichModal === index}
                onCancel={closeModal}
                onOk={closeModal}
                footer={null}
                className={
                  whichModal !== index ? "absolute inset-0 opacity-0" : ""
                }
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
                <div
                  className={`w-[219px] sm:w-[250px] md:w-[350px] lg:w-[490px] 
                  xl:w-[700px] ${textSize} ${catamaran.className} mx-auto flex
                  flex-col gap-[21px] xl:gap-[40px] py-[30px] xl:py-[40px]`}
                >
                  <p
                    className={`${titulo} text-[1.7em] ${highlight} text-center
                    ${inter.className}`}
                  >
                    {titulo}
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
              </Modal>
            );
          })}
        </div>
      </div>
    </div>
  );
}
