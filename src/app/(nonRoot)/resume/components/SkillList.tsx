"use client";
import { Box, Flex } from "@chakra-ui/react";
import React, { useState } from "react";

export type SkillListItemProps = {
  onMouseEnter: (skill: string) => void;
  onMouseLeave: (skill: string) => void;
  hoveredSkill: string | null;
};

export type SkillListProps = {
  skills: React.ComponentType<SkillListItemProps>[];
};

export const SkillList: React.FC<SkillListProps> = ({ skills }) => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  return (
    <Box flex="1" justifyItems={{ base: "flex-start", md: "flex-end" }}>
      <Flex direction="row" gap={0.5} wrap="wrap" justifyContent="flex-end">
        {skills.map((Skill, i) => (
          <Skill
            key={i.toString()}
            onMouseEnter={setHoveredSkill}
            onMouseLeave={(skill) =>
              setHoveredSkill((prev) => (prev === skill ? null : prev))
            }
            hoveredSkill={hoveredSkill}
          />
        ))}
      </Flex>
    </Box>
  );
};
