import {
  Image as ChakraImage,
  type ImageProps as ChakraImageProps,
} from "@chakra-ui/react";
import NextImage, { ImageProps as NextImageProps } from "next/image";

export type ImageProps = Omit<ChakraImageProps, "asChild" | "children"> & {
  src: NextImageProps["src"];
  alt: NextImageProps["alt"];
  width: NextImageProps["width"];
  height: NextImageProps["height"];
};

export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  width,
  height,
  ...rest
}) => {
  return (
    <ChakraImage asChild {...rest}>
      <NextImage src={src} alt={alt} width={width} height={height} />
    </ChakraImage>
  );
};
