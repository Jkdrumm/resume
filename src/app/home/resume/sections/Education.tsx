import React from "react";
import { Section } from "../components/Section";
import { EducationDetail } from "../components/EducationDetail";
import { FaGraduationCap } from "react-icons/fa6";
import { ASUIcon } from "@/components/icons/ASUIcon";
import { UCOIcon } from "@/components/icons/UCOIcon";

export const Education: React.FC = () => {
  return (
    <Section title="EDUCATION" icon={<FaGraduationCap />}>
      <EducationDetail
        name="Arizona State University"
        description="M.S. in Software Engineering"
        date="2018 - 2020"
        icon={ASUIcon}
      />
      <EducationDetail
        name="University of Central Oklahoma"
        description={[
          "B.S. in Computer Science",
          "B.S. in Software Engineering",
          "Summa Cum Laude",
        ]}
        date="2018 - 2020"
        icon={UCOIcon}
      />
    </Section>
  );
};
