import Image from "next/image";
import { titulo, textSize } from "./lib/classes";
import { ReactNode } from "react";
import { catamaran, inter } from "./lib/fonts";

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
          className="w-full h-auto lg:h-[288px] mx-auto"
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
          className="w-full h-auto mx-auto"
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

export const Trabajos: { [key: string]: ReactNode } = {
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
