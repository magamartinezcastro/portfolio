import Image from "next/image";
import React from "react";
import {
  button,
  container,
  containerPadding,
  highlight,
  textSize,
  titulo,
} from "../lib/classes";
import { catamaran } from "../lib/fonts";

import foto from "@/public/Gabi bar 39.jpg";
import Link from "next/link";

export default function About() {
  const estiloFoto = "w-[900px]";

  return (
    <main
      className={`min-h-screen bg-white text-black flex flex-col ${textSize}`}
    >
      <div className={`${containerPadding} py-[3.5em]`}>
        <div className={container}>
          <p className={`${titulo} mb-[1em]`}>
            UN POCO <span className={highlight}>DE HISTORIA</span>
          </p>
          <div className={`${catamaran.className} text-[#222222] mb-[3em]`}>
            <p className="mb-[0.75em]">
              Mi formación universitaria y de posgrado me ha habilitado a
              experiencias laborales intensas y enriquecedoras. Soy diseñadora
              aún antes de haber estudiado, apasionada por la comunicación
              visual, las herramientas digitales y el equilibrio entre el
              patrimonio cultural y la estética moderna y conectada, pudiendo
              afrontar proyectos de imagen integral, desde el desarrollo de
              marca hasta las aplicaciones digitales, impresas y espaciales para
              cultura y comercio.
            </p>
            <Image
              src={foto.src}
              alt={"Foto de Gabi"}
              width={foto.width}
              height={foto.height}
              className={`${estiloFoto} mb-[2em]`}
            />
            <ul className="mb-[1.5em]">
              <li>
                Diseño: experiencia en desarrollo de identidad gráfica y marca
                comercial. Producción y contenidos para eventos y proyectos
                culturales. Experiencia en exposición museográfica. Excelente
                dominio informático y redacción
              </li>
              <li>Branding: diseño de marca, isologotipo</li>
              <li>Diseño digital: flyer, edición de foto, animaciones</li>
              <li>Diseño impreso: poster, folletos, banner, tarjetas</li>
              <li>Redes: contenidos y post para instagram</li>
              <li>Comunicación: documentación y redacción</li>
              <li>Sitios web: Marketing comercial</li>
              <li>Exposiciones: culturales y comerciales</li>
              <li>Eventos: producción</li>
            </ul>
            <ul>
              <li>
                Formación: Licenciada en Bellas Artes. Teoría y Crítica por UNR
                / Máster en Gestión y Diseño. Centro Superior de Arquitectura.
                Univ. San Pablo Ceu. Madrid. / Licenciatura en Museología.
                Universidad de Avellaneda.
              </li>
              <li>
                Experiencia Laboral: Diseñadora gráfica / Documentación en Museo
                Castagnino. Rosario / Montaje en Estudio Jesús Moreno y Asoc.
                Madrid / Atención en Amigos del Museo del Prado. Madrid /
                Coordinación en ARCO Feria Int. de Arte Contemporáneo de Madrid
                / Diseño en Museo del Bicentenario, Ministerio de Cultura de la
                Nación. Buenos Aires / Diseño en Publicidad Planauto / Gestión
                de agenda y recursos en Secretaría de Cultura, Muni Firmat /
                Coordinación en Museo Municipal de Firmat / Gestión
                administrativa en Secretaría de Gobierno, Municipalidad de
                Firmat.
              </li>
            </ul>
          </div>
          <div className="flex w-full justify-center">
            <Link href="/#trabajos" className={button}>
              Mis Trabajos
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
