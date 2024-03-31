import Image from "next/image";
import { titulo, textSize, container, hr, containerPadding, loading } from "../lib/classes";
import { ReactNode, useEffect, useRef, useState } from "react";
import { catamaran, inter } from "../lib/fonts";
import Panel from "./panel";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { Modal } from "antd";
import useMeasure from "react-use-measure";
import ReactDOM from "react-dom/server";

function Bicentenario() {
  return (
    <>
      <div
        className={`w-[219px] sm:w-[250px] md:w-[350px] lg:w-[490px] xl:w-[700px] ${textSize} ${catamaran.className} mx-auto flex flex-col gap-[21px] xl:gap-[40px] py-[30px] xl:py-[40px]`}
      >
        <p
          className={`${titulo} text-[#ffbd59] mb-[10px] lg:mb-[30px] xl:mb-[45px] text-center ${inter.className} leading-[44px]`}
        >
          MUSEO DEL BICENTENARIO
        </p>
        <Image
          src="/Trabajos/Bicentenario_04.jpg"
          alt="Ilustracion Museo"
          width={3508}
          height={2349}
          className={`
          ${loading}
          w-full h-auto lg:h-[288px] mx-auto`}
        />
        <p className={`text-[#222222]`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          fringilla vulputate urna, a pellentesque odio accumsan consequat.
          Nullam ultricies gravida purus. Curabitur pellentesque varius nibh,
          sed mollis eros suscipit a. Etiam egestas mollis libero sed efficitur.
          Quisque nec finibus tortor. Sed quis nibh pharetra, pretium risus sed,
          aliquet magna. Praesent feugiat est et tempus volutpat. Aliquam urna
          nunc, fringilla quis lobortis ultricies, dictum non mi. Pellentesque
          turpis risus, cursus eget quam vitae, gravida semper ipsum. Nulla
          neque mauris, consequat vitae elit non, faucibus laoreet lectus. In et
          molestie diam.
        </p>
        <Image
          src="/Trabajos/09 MUNTADAS_Atril A.jpg"
          alt="Ilustracion Museo"
          width={3307}
          height={2338}
          className={`
          ${loading}
          w-full h-auto mx-auto`}
        />
        <p className={`text-[#222222]`}>
          Donec et lectus id est sollicitudin laoreet tempus eget dolor. Aenean
          quis orci nulla. Nulla pharetra metus tellus, sed tempor ligula
          pulvinar ut. Cras facilisis justo non arcu hendrerit, id facilisis est
          pretium. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia curae; Duis laoreet enim id enim varius
          condimentum. Nullam eu molestie neque, eu efficitur tortor. Praesent
          ut maximus libero, at vulputate nisi. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Phasellus porta risus orci, sed faucibus
          diam condimentum nec. Phasellus dictum tortor at risus interdum, sed
          tincidunt elit porttitor. Sed lobortis in velit sit amet auctor.
        </p>
      </div>
    </>
  );
}

const panelsContent: { [key: string]: ReactNode } = {
  bicentenario: Bicentenario(),
  expoVinos: Bicentenario(),
  unoMasUno: Bicentenario(),
  sibiglia: Bicentenario(),
  yustiMoreira: Bicentenario(),
  angelNieto: Bicentenario(),
  firenze: Bicentenario(),
  centroPiel: Bicentenario(),
  firmatCima: Bicentenario(),
};

export function Trabajos() {
  const [expandTrabajos, setExpandTrabajos] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
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
    const content = ReactDOM.renderToString(panelsContent[contentId]);
    modalContent.innerHTML = content;
  }, [isModalOpen]);

  return (
    <div ref={ref} className={`bg-[#efefef] ${containerPadding} py-[24px]`} id="trabajos">
      <div className={container}>
        <p className={titulo}>TRABAJOS</p>
        <hr className={hr} />

        <div
          className="mb-[40px] transition-all duration-1000 relative"
        >
          <div className="flex flex-wrap items-center justify-around mt-[20px] md:mt-[39px] gap-[8px] gap-y-[15px] lg:gap-[30px] lg:gap-y-[30px]">
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
          {/*
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
              className="flex items-center text-[12px] font-bold md:text-[16px] "
            >
              VER MAS
              <RiArrowDropDownLine size="12px" className="md:hidden" />
              <RiArrowDropDownLine size="20px" className="hidden md:block" />
            </button>
          </div>
          <div
            className={`${
              expandTrabajos ? "opacity-100 z-0" : "opacity-0 -z-10"
            } w-full flex justify-center items-center transition-opacity duration-100`}
          >
            <button
              onClick={() => {
                setTimeout(() => {}, 1000);
                setExpandTrabajos(false);
              }}
              className="flex items-center text-[12px] font-bold md:text-[16px] mt-[22px]"
            >
              CERRAR
              <RiArrowDropUpLine size="12px" className="md:hidden" />
              <RiArrowDropUpLine size="20px" className="hidden md:block" />
            </button>
          </div>
            */}
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
