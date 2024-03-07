import Image from "next/image";
import { button, container, titulo } from "./lib/classes";
import { catamaran } from "./lib/fonts";

export default function Portada() {
  return (
    <div className="px-[39px] sm:px-0 2xl:h-[498px]">
      <div className={`hidden sm:flex ${container} justify-between`}>
        <div className="flex flex-col justify-between gap-[44px]">
          <div>
            <p className={`${titulo} text-nowrap mb-2`}>
              MAGA <span className="text-[#ffb340]">DISEÑOS</span>
            </p>
            <p
              className={`${catamaran.className} text-[#222222] leading-[1.7em]`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              vitae purus mauris. Vestibulum finibus lacus sed ligula dapibus,
              eu aliquam lacus rutrum. Aenean mattis ante vitae lectus
              fringilla, id pretium leo porta. Nulla in erat congue, pretium
              augue ut, fermentum elit. Ut diam orci, porttitor eget facilisis
              non, fermentum sit amet augue. Nulla eu massa at ligula dictum
              facilisis. Vestibulum ut lobortis ligula. Suspendisse rutrum sem
              ante, id efficitur purus volutpat ac. Sed sagittis nec tortor sed
              volutpat. Sed orci enim, accumsan vitae feugiat non, pellentesque
              sit amet erat.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <button className={button}>Sobre Mí</button>
          </div>
        </div>
        <div className="pt-[25px] pl-[1.5em] flex-shrink-0">
          <Image
            src="/stock-photo-portrait-of-young-happy-beautiful-woman-smiling-and-standing-isolated-on-white-background-in-a-warm-2142785465.jpg"
            alt="Imagen de MAGA"
            width={1550}
            height={995}
            className="w-[140px] h-[176px] sm:w-[145px] sm:h-[183px] md:w-[194px] md:h-[244px] lg:w-[250px] lg:h-[315px] xl:w-[303px] xl:h-[381px] 2xl:w-[363px] 2xl:h-[457px]"
          />
        </div>
      </div>
      <div className={`${container} flex sm:hidden flex-col gap-[20px]`}>
        <div>
          <p className={`${titulo} text-nowrap mb-2`}>
            MAGA <span className="text-[#ffb340]">DISEÑOS</span>
          </p>
          <p className={`${catamaran.className} text-[#222222] leading-[1.7em]`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae
            purus mauris. Vestibulum finibus lacus sed ligula dapibus, eu aliquam
            lacus rutrum. Aenean mattis ante vitae lectus fringilla, id pretium
            leo porta. Nulla in erat congue, pretium augue ut, fermentum elit. Ut
            diam orci, porttitor eget facilisis non, fermentum sit amet augue.
            Nulla eu massa at ligula dictum facilisis. Vestibulum ut lobortis
            ligula. Suspendisse rutrum sem ante, id efficitur purus volutpat ac.
            Sed sagittis nec tortor sed volutpat. Sed orci enim, accumsan vitae
            feugiat non, pellentesque sit amet erat.
          </p>
        </div>
        <Image
            src="/stock-photo-portrait-of-young-happy-beautiful-woman-smiling-and-standing-isolated-on-white-background-in-a-warm-2142785465 (1).jpg"
            alt="Imagen de MAGA"
            width={1550}
            height={995}
            className="w-full"
          />
        <div className="flex justify-center items-center">
          <button className={button}>Sobre Mí</button>
        </div>
      </div>
    </div>
  );
}
