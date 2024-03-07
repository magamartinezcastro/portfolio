import Image from "next/image";

export default function ResizeImage({
  src,
  alt,
  width,
  height,
  baseWidth,
  baseHeight,
  finalWidth,
  finalHeight,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  baseWidth: number;
  baseHeight: number;
  finalWidth: number;
  finalHeight: number;
}) {
  const breakpoints = { sm: 576, md: 768, lg: 992, xl: 1200, "2xl": 1440 };
  const resizing = Object.entries(breakpoints)
    .map(
      ([br, size], _, __) => `\
    ${br}:w-[${Math.round((finalWidth / 1440) * size)}px]\
    ${br}:h-[${Math.round((finalHeight / 1440) * size)}px]\
    `
    )
    .join(" ");

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`w-[${baseWidth}px] h-[${baseHeight}px] ${resizing}`}
    />
  );
}
