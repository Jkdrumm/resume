"use client";
import { Link, LinkProps } from "@/components/compound/Link";
// import { Avatar } from "@/components/ui/avatar";
import {
  HoverCardArrow,
  HoverCardContent,
  HoverCardRoot,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Box, Center, Icon, IconProps, Stack, Text } from "@chakra-ui/react";
import { LuExternalLink } from "react-icons/lu";
import { SkillListItemProps } from "./SkillList";
import { useEffect, useState } from "react";

export type SkillUsedDetailProps = {
  name: string;
  description: string | React.ReactNode;
  icon: React.ReactNode;
  colorIcon: React.ComponentType<IconProps>;
  href: LinkProps["href"];
} & SkillListItemProps;

export const SkillUsedDetail: React.FC<SkillUsedDetailProps> = ({
  name,
  description,
  icon,
  colorIcon: ColorIcon,
  href,
  onMouseEnter,
  onMouseLeave,
  hoveredSkill,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const isHoveredSkill = hoveredSkill === name;
  const forceClose = hoveredSkill !== null && !isHoveredSkill;
  useEffect(() => {
    if (forceClose) setIsOpen(false);
    else if (isHoveredSkill) setIsOpen(true);
  }, [forceClose, isHoveredSkill]);
  return (
    <HoverCardRoot
      size="lg"
      open={isOpen}
      onOpenChange={(e) => setIsOpen(e.open)}
      openDelay={0}
      closeDelay={250}
      immediate
      positioning={{ placement: "top" }}
    >
      <HoverCardTrigger asChild>
        <Center
          w="1.5rem"
          h="1.5rem"
          onMouseEnter={() => onMouseEnter(name)}
          onMouseLeave={() => onMouseLeave(name)}
        >
          <Icon
            fontSize={isOpen ? "30px" : "lg"}
            transition="font-size 0.1s linear"
          >
            {icon}
          </Icon>
        </Center>
      </HoverCardTrigger>
      <HoverCardContent p={4}>
        <HoverCardArrow />
        <Stack gap="4" direction="row">
          <ColorIcon fontSize="40px" />
          <Stack gap="3">
            <Stack gap="1">
              <Link href={href} isExternal w="min-content">
                <Text textStyle="sm" fontWeight="semibold" whiteSpace="nowrap">
                  {name}
                </Text>
                <LuExternalLink />
              </Link>
              {typeof description === "string" ? (
                <Text textStyle="sm" color="fg.muted">
                  {description}
                </Text>
              ) : (
                <Box textStyle="sm" color="fg.muted">
                  {description}
                </Box>
              )}
            </Stack>
          </Stack>
        </Stack>
      </HoverCardContent>
    </HoverCardRoot>
  );
};
