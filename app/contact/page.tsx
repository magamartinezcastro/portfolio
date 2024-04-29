'use client'

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
import { FaBehance, FaInstagram, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiLinktree } from "react-icons/si";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaWix } from "react-icons/fa";
import { sendContactForm } from '../lib/ops';

export default function Contact() {
  const redesStyle = "inline mt-[-0.2em] mr-[0.3em] text-[1.5em]";
  const inputStyle = "bg-[#eeeeee] rounded-[5px] px-4 py-2";
  const links = {
    "instagram": "https://www.instagram.com/magamartinezcastro/",
    "linktree": "https://linktr.ee/magamartinezcastro",
    "linkedin": "www.linkedin.com/in/gabrielamartinezcastro",
    "behance": "https://www.behance.net/magamartinezcastro",
    "facebook": "https://www.facebook.com/magamartinezcastro/",
    "wix": "https://magamartinezcastro.wixsite.com/my-site"
  }
  
  return (
    <main
      className={`min-h-screen bg-white text-black flex flex-col ${textSize}`}
    >
      <div className={`${containerPadding} py-[2.5em]`}>
        <div className={container}>
          <p className={`${titulo} ${highlight} mb-[1em]`}>CONTACTO</p>
          <div className={`${catamaran.className} text-[#222222] mb-[3em]`}>
            <p className="mb-[1.1em]">
              Podes escribirme al <FaPhone className="inline" />
              +54 3465-44200, o enviarme un mail a mi correo{" "}
              <MdEmail className="inline" />
              magamartinezcastro@gmail.com
            </p>
            <div className="mb-[2em]">
              Seguime en las redes sociales
              <ul
                className="px-4 py-2 text-[#0409ff] flex flex-col gap-2 
                underline underline-offset-1"
              >
                <li>
                  <a href={links.facebook} target="_blank">
                    <FaFacebook className={redesStyle} />
                    <small>Facebook</small>
                  </a>
                </li>
                <li>
                  <a href={links.linktree} target="_blank">
                    <SiLinktree className={redesStyle} />
                    <small>Linktree</small>
                  </a>
                </li>
                <li>
                  <a href={links.instagram} target="_blank">
                    <FaInstagram className={redesStyle} />
                    <small>Instagram</small>
                  </a>
                </li>
                <li>
                  <a href={links.linkedin} target="_blank">
                    <FaLinkedin className={redesStyle} />
                    <small>LinkedIn</small>
                  </a>
                </li>
                <li>
                  <a href={links.behance} target="_blank">
                    <FaBehance className={redesStyle} />
                    <small>Behance</small>
                  </a>
                </li>
              </ul>
            </div>
            <div className="mb-[3em]">
              Completa el siguiente formulario para dejarme un mensaje o tu
              consulta
              <form
                onSubmit={sendContactForm("contactForm")}
                id="contactForm"
                className="flex flex-col gap-4 w-[50%] min-w-[300px] mt-2"
              >
                <input
                  className={inputStyle}
                  placeholder="Nombre"
                  type="text"
                  name="Nombre"
                  required
                ></input>
                <input
                  className={inputStyle}
                  placeholder="Dirección de correo electrónico"
                  type="email"
                  name="Correo"
                ></input>
                <input
                  className={inputStyle}
                  placeholder="Telefono"
                  type="tel"
                  name="Telefono"
                ></input>
                <textarea
                  className={`${inputStyle} min-h-[150px]`}
                  placeholder="Mensaje..."
                  name="Mensaje"
                  required
                ></textarea>
                <div className="flex justify-end">
                  <button className="bg-[#cacaca] text-[0.7em] px-4 py-2 rounded-[5px] w-fit">
                    Aceptar
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="flex w-full justify-center">
            <Link href="/#trabajos" className={`${button} font-semibold`}>
              Volver A Mis Trabajos
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
