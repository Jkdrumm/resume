"use client";
import { SkillUsedDetail } from "../components/SkillUsedDetail";
import { SiGraphql } from "react-icons/si";
import { SkillListItemProps } from "../components/SkillList";
import { GraphQLColorIcon } from "@/components/icons/GraphQLColorIcon";

export const GraphQL: React.FC<SkillListItemProps> = (props) => {
  return (
    <SkillUsedDetail
      name="GraphQL"
      description="GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools."
      icon={<SiGraphql />}
      colorIcon={GraphQLColorIcon}
      href="https://graphql.org/"
      {...props}
    />
  );
};
