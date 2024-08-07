"use client";

import type { Metadata } from "next";
import "./globals.css";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { MdOutlineEmail } from "react-icons/md";
import { CiPhone } from "react-icons/ci";
import { FaBehance, FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { container } from "./lib/classes";
import { inter } from "./lib/fonts";
import { SiLinktree } from "react-icons/si";
import logo from "@/public/logo_v2.png";
import { sendContactForm } from "./lib/ops";
import icon from 'favicon.ico'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const active = "text-[#ffbd59]";
  const navigation = (href: string) =>
    `font-extrabold link hover:text-[#ffbd59] transition-all duration-300 ${
      pathname === href ? active : ""
    }`;
  const telefono = "(+54) 3465 442000"
  const links = {
    "instagram": "https://www.instagram.com/magamartinezcastro/",
    "linktree": "https://linktr.ee/magamartinezcastro",
    "linkedin": "www.linkedin.com/in/gabrielamartinezcastro",
    "behance": "https://www.behance.net/magamartinezcastro",
    "facebook": "https://www.facebook.com/magamartinezcastro/",
    "wix": "https://magamartinezcastro.wixsite.com/my-site"
  }

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>MC Diseño</title>
        <link rel="icon" href="/public/favicon.ico" type="image/x-icon"/>
      </head>
      <body
        className={`${inter.className} bg-white min-w-[340px] cursor-default`}
      >
        <div className="text-white">
          <div className="px-[39px] text-[8px] md:text-[12px] bg-[#d9d9d9]">
            <div
              className={`flex justify-between items-center h-[95px] md:h-[112px] lg:h-[132px] ${container}`}
            >
              <Link href="/">
                <img
                  src={logo.src}
                  alt="Logo MAGA"
                  width={logo.width}
                  height={logo.height}
                  className={`hover:-rotate-6 transition-all duration-300 w-[80px] md:w-[100px] lg:w-[120px]`}
                />
              </Link>
              <div
                className={`flex items-center flex-wrap justify-end gap-3 text-black`}
              >
                <div className="flex items-center gap-1">
                  <MdOutlineEmail
                    fill="black"
                    size="10px"
                    className="md:hidden"
                  />
                  <MdOutlineEmail
                    fill="black"
                    size="12px"
                    className="hidden md:block"
                  />
                  <div className="flex flex-col md:flex-row">
                    <p>magamartinezcastro</p>
                    <p>@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <CiPhone
                    fill="black"
                    size="10px"
                    className="md:hidden inline-block"
                  />
                  <CiPhone
                    fill="black"
                    size="12px"
                    className="hidden md:inline-block"
                  />
                  {telefono}
                </div>
              </div>
            </div>
          </div>
          <div className="px-[39px] text-[12px] md:text-[16px] bg-[#3e3d3d]">
            <div
              className={`flex justify-between items-center xs:h-[53px] py-[10px] xs:py-0 gap-3 ${container}`}
            >
              <Link className={navigation("/")} href="/">
                PORTFOLIO
              </Link>
              <Link className={navigation("/about")} href="/about">
                SOBRE MI
              </Link>
              <Link className={navigation("/contact")} href="/contact">
                CONTACTO
              </Link>
            </div>
          </div>
        </div>
        <div className="min-h-screen">
          {" "}
          {/* prevent too much layout shift */}
          {children}
        </div>
        <div className="bg-[#3d3d3d] px-[39px] py-[20px] md:pt-[40px] text-white">
          <div className={container}>
            <div className="flex flex-wrap justify-between gap-3 text-[8px] md:text-[12px]">
              <div className="flex flex-col gap-2">
                <p className="text-[12px] md:text-[20px] font-bold leading-6">
                  Contactame
                </p>
                <div className="flex flex-col gap-1 mb-1">
                  <div className="flex items-center gap-1">
                    <MdOutlineEmail
                      fill="white"
                      size="10px"
                      className="md:hidden"
                    />
                    <MdOutlineEmail
                      fill="white"
                      size="12px"
                      className="hidden md:block"
                    />
                    <div className="flex flex-col md:flex-row">
                      <p>magamartinezcastro@gmail.</p>
                      <p>com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <CiPhone
                      fill="white"
                      size="10px"
                      className="md:hidden inline-block"
                    />
                    <CiPhone
                      fill="white"
                      size="12px"
                      className="hidden md:inline-block"
                    />
                    {telefono}
                  </div>
                </div>
                <div className="flex px-2 gap-2">
                  <a href={links.facebook} target="_blank">
                    <FaFacebook
                      size="10px"
                      className="md:hidden inline-block"
                    />
                    <FaFacebook
                      size="12px"
                      className="hidden md:inline-block"
                    />
                  </a>
                  <a href={links.linktree} target="_blank">
                    <SiLinktree
                      size="10px"
                      className="md:hidden inline-block"
                    />
                    <SiLinktree
                      size="12px"
                      className="hidden md:inline-block"
                    />
                  </a>
                  <a href={links.instagram} target="_blank">
                    <FaInstagram
                      size="10px"
                      className="md:hidden inline-block"
                    />
                    <FaInstagram
                      size="12px"
                      className="hidden md:inline-block"
                    />
                  </a>
                  <a href={links.linkedin} target="_blank">
                    <FaLinkedin
                      size="10px"
                      className="md:hidden inline-block"
                    />
                    <FaLinkedin
                      size="12px"
                      className="hidden md:inline-block"
                    />
                  </a>
                  <a href={links.behance} target="_blank">
                    <FaBehance size="10px" className="md:hidden inline-block" />
                    <FaBehance size="12px" className="hidden md:inline-block" />
                  </a>
                </div>
                <div className="hidden md:flex flex-col gap-2 mt-1 text-black">
                  <p className="text-white">
                    O bien completa el siguiente formulario
                  </p>
                  <form
                    id="footerContactForm"
                    onSubmit={sendContactForm("footerContactForm")}
                    className="flex flex-col gap-2"
                  >
                    <input
                      className="bg-[#eeeeee] px-2 py-1 rounded-[5px]"
                      type="text"
                      placeholder="Nombre"
                      name="Nombre"
                      required
                    ></input>
                    <input
                      className="bg-[#eeeeee] px-2 py-1 rounded-[5px]"
                      type="email"
                      placeholder="Direccion de correo electronico"
                      name="Correo"
                    ></input>
                    <input
                      className="bg-[#eeeeee] px-2 py-1 rounded-[5px]"
                      type="tel"
                      placeholder="Telefono"
                      name="Telefono"
                    ></input>
                    <textarea
                      className="bg-[#eeeeee] h-[108px] px-2 py-1 rounded-[5px] align-top"
                      placeholder="Mensaje..."
                      name="Mensaje"
                      required
                    ></textarea>
                    <div className="flex justify-end">
                      <button className="px-2 py-1 bg-[#cacaca] text-[6px] rounded-[5px] md:text-[8px]">
                        Aceptar
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[12px] md:text-[20px]  font-bold leading-6">
                  Navegacion
                </p>
                <Link className={navigation("/")} href="/">
                  PORTFOLIO
                </Link>
                <Link className={navigation("/about")} href="/about">
                  SOBRE MI
                </Link>
                <Link className={navigation("/contact")} href="/contact">
                  CONTACTO
                </Link>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[12px] md:text-[20px] font-bold leading-6">
                  Sobre esta página
                </p>
                <a className="block" href="" target="_blank">
                  Terminos de uso
                </a>
                <a className="block" href="" target="_blank">
                  Informacion de copyright
                </a>
              </div>
            </div>
            <div className="text-[6px] md:text-[10px] text-right">
              <p>Made with NextJS</p>
              <p>gastonmartinezcastro@gmail.com</p>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
