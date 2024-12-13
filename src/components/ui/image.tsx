import {
  Image as ChakraImage,
  type ImageProps as ChakraImageProps,
} from "@chakra-ui/react";
import NextImage, { ImageProps as NextImageProps } from "next/image";

export type ImageProps = Omit<ChakraImageProps, "asChild" | "children"> & {
  src: NextImageProps["src"];
  alt: NextImageProps["alt"];
  width?: NextImageProps["width"];
  height?: NextImageProps["height"];
  size?: NextImageProps["width"];
} & (
    | {
        width: NextImageProps["width"];
        height: NextImageProps["height"];
      }
    | {
        size: NextImageProps["width"];
      }
  );

export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  width,
  height,
  size,
  ...rest
}) => {
  return (
    <ChakraImage asChild {...rest}>
      <NextImage
        src={src}
        alt={alt}
        width={width ?? size}
        height={height ?? size}
      />
    </ChakraImage>
  );
};
