"use client";
import { HStack } from "@chakra-ui/react";
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
    <HStack gap={0.5}>
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
    </HStack>
  );
};
