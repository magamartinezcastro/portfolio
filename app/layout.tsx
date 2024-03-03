'use client'

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from "next/image";

import { MdOutlineEmail } from "react-icons/md";
import { CiPhone } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";

const inter = Inter({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname()
  const active = "text-[#ffbd59]"
  const container = "sm:max-w-[420px] md:max-w-[480px] lg:max-w-[640px] xl:max-w-[800px] mx-auto"

  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className="">
          <div className="px-[39px] text-[8px] md:text-[12px] bg-[#d9d9d9]">
            <div className={`flex justify-between items-center h-[75px] md:h-[92px] ${container}`}>
              <Image 
                src="/logo_v2.png"
                alt="Logo MAGA"
                width={1313}
                height={1313}
                className={`w-[60px] md:w-[80px]`}/>
              <div className={`flex items-center gap-3 text-black`}>
                <div className="flex items-center gap-1">
                <MdOutlineEmail fill="black" size="10px" className="md:hidden"/>
                <MdOutlineEmail fill="black" size="12px" className="hidden md:block"/>
                <div className="flex flex-col md:flex-row"><p>magamartinezcastro</p><p>@gmail.com</p></div>
                </div>
                <div className="flex items-center gap-1">
                <CiPhone fill="black" size="10px" className="md:hidden inline-block"/>
                <CiPhone fill="black" size="12px" className="hidden md:inline-block"/>
                3465-442000
                </div>
              </div>
            </div>
          </div>
          <div className="px-[39px] text-[12px] md:text-[16px] bg-[#3e3d3d]">
            <div className={`flex justify-between items-center h-[53px] ${container}`}>
              <Link className={`font-extrabold link ${pathname === '/' ? active : ''}`} href="/">
                PORTFOLIO
              </Link>
              <Link className={`font-extrabold link ${pathname === '/about' ? active : ''}`} href="/about">
                SOBRE MI
              </Link>
              <Link className={`font-extrabold link ${pathname === '/contact' ? active : ''}`} href="/contact">
                CONTACTO
              </Link>
            </div>
          </div>
        </div>
        {children}
        <div className="bg-[#3d3d3d] px-[39px] py-[20px] md:pt-[40px]">
          <div className={container}>
            <div className="flex flex-wrap justify-between gap-3 text-[8px] md:text-[12px]">
              <div className="flex flex-col gap-2">
                <p className="text-[12px] md:text-[20px] font-bold leading-6">Contactate</p>
                <div className="flex flex-col gap-1 mb-1">
                  <div className="flex items-center gap-1">
                    <MdOutlineEmail fill="white" size="10px" className="md:hidden"/>
                    <MdOutlineEmail fill="white" size="12px" className="hidden md:block"/>
                    <div className="flex flex-col md:flex-row"><p>magamartinezcastro@gmail.</p><p>com</p></div>
                  </div>
                  <div className="flex items-center gap-1">
                    <CiPhone fill="white" size="10px" className="md:hidden inline-block"/>
                    <CiPhone fill="white" size="12px" className="hidden md:inline-block"/>
                    3465-442000
                  </div>
                </div>
                <div className="flex px-2 gap-2">
                  <a href="" target="_blank">
                    <FaFacebook size="10px" className="md:hidden inline-block"/>
                    <FaFacebook size="12px" className="hidden md:inline-block"/>
                  </a>
                  <a href="" target="_blank">
                    <FaXTwitter size="10px" className="md:hidden inline-block"/>
                    <FaXTwitter size="12px" className="hidden md:inline-block"/>
                  </a>
                  <a href="" target="_blank">
                    <FaInstagram size="10px" className="md:hidden inline-block"/>
                    <FaInstagram size="12px" className="hidden md:inline-block"/>
                  </a>
                  <a href="" target="_blank">
                    <FaPinterest size="10px" className="md:hidden inline-block"/>
                    <FaPinterest size="12px" className="hidden md:inline-block"/>
                  </a>
                </div>
                <div className="hidden md:flex flex-col gap-2 mt-1 text-black">
                  <p className="text-white">O bien completa el siguiente formulario</p>
                  <input className="bg-[#eeeeee] px-2 py-1 rounded-[5px]" type="text" placeholder="Nombre"></input>
                  <input className="bg-[#eeeeee] px-2 py-1 rounded-[5px]" type="text" placeholder="Direccion de correo electronico"></input>
                  <input className="bg-[#eeeeee] px-2 py-1 rounded-[5px]" type="text" placeholder="Asunto"></input>
                  <textarea className="bg-[#eeeeee] h-[108px] px-2 py-1 rounded-[5px] align-top" placeholder="Mensaje..."></textarea>
                  <div className="flex justify-end">
                    <button className="px-2 py-1 bg-[#cacaca] text-[6px] rounded-[5px] md:text-[8px]">Aceptar</button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[12px] md:text-[20px]  font-bold leading-6">Navegacion</p>
                <Link className={`font-bold link ${pathname === '/' ? active : ''}`} href="/">
                  PORTFOLIO
                </Link>
                <Link className={`font-bold link ${pathname === '/about' ? active : ''}`} href="/about">
                  SOBRE MI
                </Link>
                <Link className={`font-bold link ${pathname === '/contact' ? active : ''}`} href="/contact">
                  CONTACTO
                </Link>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[12px] md:text-[20px] font-bold leading-6">Sobre esta página</p>
                <a className="block" href="" target="_blank">
                  Terminos de uso
                </a>
                <a className="block" href="" target="_blank">
                  Informacion de copyright
                </a>
              </div>
            </div>
            <div className="text-[10px] text-right">
              <p>Made with Figma</p>
              <p>gastonmartinezcastro@gmail.com</p>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
