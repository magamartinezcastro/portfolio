import Image from "next/image";
import { container, containerPadding, hr, titulo } from "../lib/classes";

import Img1 from "@/public/museoQuirquinchos.jpg";
import Img2 from "@/public/ferrocarril.jpg";
import Img3 from "@/public/museoMuni.jpg";
import principal from "@/public/museo_principal.jpg";
import { catamaran, inter } from "../lib/fonts";

export default function Museos() {
  const imgStyle =
    "h-[84px] sm:h-[100px] md:h-[125px] lg:h-[172px] xl:h-[207px] mb-[1em]";

  return (
    <div className={`${containerPadding} text-[#222222]`}>
      <div className={`${container} ${catamaran.className}`}>
        <div className="flex flex-col items-center mb-[2em]">
          <p className={titulo}>ARTE Y MUSEOS</p>
          <hr className={hr} />
        </div>

        <div className="mb-[3em] sm:mb-[3.8em]">
          <img
            src={principal.src}
            alt=""
            width={principal.width}
            height={principal.height}
            className="w-full mb-[2.3em]"
            loading="lazy"
          />
          <p className={`${inter.className} mb-[1em] text-[1.5em] font-bold`}>
            Diseño de exposiciones culturales y comerciales
          </p>
          <p className="leading-[1.75em] text-[#222222]">
            El diseño integral de una exposición considera al espacio como un
            medio de comunicación en donde integrar recursos, según sea el tema
            a exhibir. He realizado diversos proyectos, formando parte de
            equipos de trabajo, coordinando conceptos, instalaciones y montajes.
            Se requiere un conocimiento 360 del tema, los objetos y el espacio,
            reuniendo los recursos y el equipo, para realizar documentación,
            relato, iluminación y consideraciones de conservación del
            patrimonio, estética integral, colorimetría y gráfica aplicada a la
            señalética. Publicidad y marketing.
          </p>
        </div>

        <div className="flex justify-around flex-wrap sm:flex-nowrap gap-y-[4em] sm:gap-[1.2em] text-[0.75em] sm:text-[0.6em] mb-[2em]">
          <div className="text-center sm:w-1/3 w-[45%]">
            <img
              src={Img1.src}
              alt=""
              width={Img1.width}
              height={Img1.height}
              className={imgStyle}
              loading="lazy"
            />
            <b className="text-[1.25em]">Museo Histórico de los Quirquinchos</b>
            <p className="text-[#222222]">
              Museo Histórico de los Quirquinchos &quot;Mi Patria Chica&quot;
            </p>
          </div>
          <div className="text-center sm:w-1/3 w-[45%]">
            <img
              src={Img2.src}
              alt=""
              width={Img2.width}
              height={Img2.height}
              className={imgStyle}
              loading="lazy"
            />
            <b className="text-[1.25em]">Ferrocarril Estación Firmat</b>
            <p className="text-[#222222]">
              Ferrocarril del Oeste Santafesino
            </p>
          </div>
          <div className="text-center sm:w-1/3 w-[45%]">
            <img
              src={Img3.src}
              alt=""
              width={Img3.width}
              height={Img3.height}
              className={imgStyle}
              loading="lazy"
            />
            <b className="text-[1.25em]">Museo Municipalidad de Firmat</b>
            <p className="text-[#222222]">
              Muestra Museo Municipalidad de Firmat
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
