import Image from "next/image";
import Link from "next/link";
import { button, container, containerPadding, highlight, loading, titulo } from "../lib/classes";
import { catamaran } from "../lib/fonts";

import fotoPortada from "@/public/gabi 8.webp";
import fotoPortadaAlt from "@/public/gabi 9.webp";

export default function Portada() {
  const alt = "Foto de MAGA";
  const width = 6240;
  const height = 4160;
  const estiloFoto = `
    w-[140px] h-[176px] sm:w-[145px] sm:h-[211px] md:w-[194px] md:h-[282px]
    lg:w-[250px] lg:h-[364px] xl:w-[303px] xl:h-[441px] 2xl:w-[363px]
    2xl:h-[529px] object-cover`
    
  return (
    <div className={containerPadding}>
      <div className={`hidden sm:flex ${container} justify-between`}>
        <div className="flex flex-col justify-between gap-[44px]">
          <div>
            <p className={`${titulo} text-nowrap mb-2`}>
              GESTION <span className={highlight}> Y DISEÑO</span>
            </p>
            <div
              className={`${catamaran.className} text-[#222222] leading-[1.7em]`}
            >
              <p>
                Mi nombre es Gabriela Martinez Castro, soy una profesional con
                sólida experiencia en el campo del diseño gráfico y la gestión
                cultural.
              </p>
              <p>
                Durante mi trayectoria, he tenido la oportunidad de
                especializarme en áreas como la comunicación visual, el branding
                y la producción de contenidos, destacándome especialmente en la
                creación de logotipos y el desarrollo de marcas comerciales con
                un enfoque tanto estético como estratégico.
              </p>
              <p>
                Mi experiencia laboral tanto a nivel nacional como internacional
                me ha permitido adquirir habilidades en la gestión de proyectos,
                ofreciendo soluciones creativas y efectivas con un alto nivel de
                profesionalismo y atención al detalle.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Link
              href="/about"
              className={`${button} filter hover:saturate-150 transition-all duration-75`}
            >
              Sobre Mí
            </Link>
          </div>
        </div>
        <div className="pt-[25px] pl-[1.5em] flex-shrink-0">
          <img
            src={fotoPortada.src}
            alt={alt}
            width={fotoPortada.width}
            height={fotoPortada.height}
            className={`${estiloFoto} ${loading}`}
          />
        </div>
      </div>
      <div className={`${container} flex sm:hidden flex-col gap-[20px]`}>
        <div>
          <p className={`${titulo} text-nowrap mb-2`}>
            GESTION <span className={highlight}> Y DISEÑO</span>
          </p>
          <div
              className={`${catamaran.className} text-[#222222] leading-[1.7em]`}
            >
              <p>
                Mi nombre es Maria Gabriela (MAGA) y soy una profesional con
                sólida experiencia en el campo del diseño gráfico y la gestión
                cultural.
              </p>
              <p>
                Durante mi trayectoria, he tenido la oportunidad de
                especializarme en áreas como la comunicación visual, el branding
                y la producción de contenidos, destacándome especialmente en la
                creación de logotipos y el desarrollo de marcas comerciales con
                un enfoque tanto estético como estratégico.
              </p>
              <p>
                Mi experiencia laboral tanto a nivel nacional como internacional
                me ha permitido adquirir habilidades en la gestión de proyectos,
                ofreciendo soluciones creativas y efectivas con un alto nivel de
                profesionalismo y atención al detalle.
              </p>
            </div>
        </div>
        <img
          src={fotoPortadaAlt.src}
          alt={alt}
          width={fotoPortadaAlt.width}
          height={fotoPortadaAlt.height}
          className="w-full"
        />
        <div className="flex justify-center items-center">
          <Link
            href="/about"
            className={`${button} filter hover:saturate-150 transition-all duration-75`}
          >
            Sobre Mí
          </Link>
        </div>
      </div>
    </div>
  );
}
