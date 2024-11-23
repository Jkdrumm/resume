import {
  FaBowlFood,
  FaChildReaching,
  FaDumbbell,
  FaLanguage,
  FaRegCompass,
} from "react-icons/fa6";
import { Section } from "../components/Section";
import { Box, type BoxProps } from "@chakra-ui/react";
import { ExtrasDetail } from "../components/ExtrasDetail";
import { IoMdBicycle } from "react-icons/io";
import { BSAIcon } from "@/components/icons/BSAIcon";
import { SmashIcon } from "@/components/icons/SmashIcon";
import { GiSaxophone } from "react-icons/gi";
import { FaCoffee } from "react-icons/fa";

export type BeyondTheCodeProps = BoxProps;

export const Extras: React.FC<BeyondTheCodeProps> = (props) => {
  return (
    <Box {...props}>
      <Section title="BEYOND CODING" icon={<FaRegCompass />}>
        <ExtrasDetail
          name="Fitness Enthusiast"
          icon={FaDumbbell}
          description="Lifting weights and running 5x a week"
        />
        <ExtrasDetail
          name="Road Cycling"
          icon={IoMdBicycle}
          description="Completed a 100-Mile Century Ride"
        />
        <ExtrasDetail
          name="日本語 (Japanese)"
          icon={FaLanguage}
          description="毎日勉強しています"
        />
        <ExtrasDetail
          name="BSA Eagle Scout"
          icon={BSAIcon}
          description="Butterfly Garden Eagle Project"
        />
        <ExtrasDetail
          name="Musician"
          icon={GiSaxophone}
          description="Tenor Saxophone Player"
        />
        <ExtrasDetail
          name="Dad"
          icon={FaChildReaching}
          description="Father of one"
        />
        <ExtrasDetail
          name="Cooking Enthusiast"
          icon={FaBowlFood}
          description="I enjoy cooking at home and trying new recipes"
        />
        <ExtrasDetail
          name="Coffee Enthusiast"
          icon={FaCoffee}
          description="I enjoy just about any coffee, but at home I prefer cold brew"
        />
        <ExtrasDetail
          name="Esports Competitor"
          icon={SmashIcon}
          description="Formerly ranked 96th worldwide for Super Smash Bros"
        />
      </Section>
    </Box>
  );
};
