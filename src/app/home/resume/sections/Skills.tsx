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
      <SkillDetail
        name="JavaScript"
        level={5}
        icon={<SiJavascript />}
        href="https://developer.mozilla.org/docs/Web/JavaScript"
      />
      <SkillDetail
        name="TypeScript"
        level={5}
        icon={<SiTypescript />}
        href="https://www.typescriptlang.org/"
      />
      <SkillDetail
        name="React"
        level={5}
        icon={<SiReact />}
        href="https://react.dev/"
      />
      <SkillDetail
        name="Node.js"
        level={4}
        icon={<SiNodedotjs />}
        href="https://nodejs.org/"
      />
      <SkillDetail
        name="Jest"
        level={4}
        icon={<SiJest />}
        href="https://jestjs.io/"
      />
      <SkillDetail
        name="Webpack"
        level={3.5}
        icon={<SiWebpack />}
        href="https://webpack.js.org/"
      />
      <SkillDetail
        name="Python"
        level={3}
        icon={<SiPython />}
        href="https://www.python.org/"
      />
    </Section>
  );
};
