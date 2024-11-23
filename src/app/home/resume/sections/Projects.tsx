import {
  FaCodeBranch,
  FaHouseChimney,
  FaIdCard,
  FaMobileScreen,
} from "react-icons/fa6";
import { Section } from "../components/Section";
import { PersonalProjectDetail } from "../components/PersonalProjectDetail";
import { ChakraUI } from "../skills/ChakraUI";
import { NextJS } from "../skills/NextJS";
import { TypeScript } from "../skills/TypeScript";
import { TanStackQuery } from "../skills/TanStackQuery";
import { ReactSkill } from "../skills/React";
import { MongoDB } from "../skills/MongoDB";
import { SocketIO } from "../skills/SocketIO";
import { RaspberryPi } from "../skills/RaspberryPi";
import { ReactNative } from "../skills/ReactNative";
import { Motion } from "../skills/Motion";

export const Projects: React.FC = () => {
  return (
    <Section title="PERSONAL PROJECTS" icon={<FaCodeBranch />} gap={8}>
      <PersonalProjectDetail
        name="Garage Door Web App"
        icon={FaHouseChimney}
        href="https://github.com/Jkdrumm/garage-door-next"
        description="A web-based garage door control system hosted on a home webserver on a raspberry pi. This will allow home-owners to have habitants, family friends, and guests to create personalized accounts and have different levels of access to the garage door."
        skills={[
          ReactSkill,
          TypeScript,
          NextJS,
          ChakraUI,
          TanStackQuery,
          SocketIO,
          MongoDB,
          RaspberryPi,
        ]}
      />
      <PersonalProjectDetail
        name="Garage Door Mobile App"
        icon={FaMobileScreen}
        href="https://github.com/Jkdrumm/garage-door-mobile"
        description="A mobile app to acompany the Garage Door Web App. Intended to mimic the functionality of the web app but with the added functionality of push notifications and the ability to setup the webserver through bluetooth."
        skills={[
          ReactNative,
          TypeScript,
          TanStackQuery,
          SocketIO,
          MongoDB,
          RaspberryPi,
        ]}
      />
      <PersonalProjectDetail
        name="Personal Website"
        icon={FaIdCard}
        href="https://github.com/Jkdrumm/resume"
        description="My personal website and resume. This is where this page is hosted."
        skills={[ReactSkill, TypeScript, NextJS, Motion]}
      />
    </Section>
  );
};
