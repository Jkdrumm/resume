import { FaScrewdriverWrench } from "react-icons/fa6";
import { Section } from "../components/Section";
import { SkillDetail } from "../components/SkillDetail";
import {
  SiJavascript,
  SiJest,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiTypescript,
  SiWebpack,
} from "react-icons/si";

export const Skills = () => {
  return (
    <Section title="SKILLS" icon={<FaScrewdriverWrench />}>
      <SkillDetail name="JavaScript" level={5} icon={<SiJavascript />} />
      <SkillDetail name="TypeScript" level={5} icon={<SiTypescript />} />
      <SkillDetail name="React" level={5} icon={<SiReact />} />
      <SkillDetail name="Node.js" level={4} icon={<SiNodedotjs />} />
      <SkillDetail name="Jest" level={4} icon={<SiJest />} />
      <SkillDetail name="Webpack" level={3.5} icon={<SiWebpack />} />
      <SkillDetail name="Python" level={3} icon={<SiPython />} />
    </Section>
  );
};
