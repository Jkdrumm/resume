import React from "react";
import { Section } from "../components/Section";
import { FaBriefcase } from "react-icons/fa6";
import { ExperienceDetail } from "../components/ExperienceDetail";
import { PaycomIcon } from "@/components/icons/PaycomIcon";
import { AdyptationIcon } from "@/components/icons/AdyptationIcon";
import { IndigoTechGroupIcon } from "@/components/icons/IndigoTechGroupIcon";
import { ChakraUI } from "../skills/ChakraUI";
import { NextJS } from "../skills/NextJS";
import { ReactSkill } from "../skills/React";
import { TanStackQuery } from "../skills/TanStackQuery";
import { ReactNative } from "../skills/ReactNative";
import { TypeScript } from "../skills/TypeScript";
import { JavaScript } from "../skills/JavaScript";
import { GraphQL } from "../skills/GraphQL";
import { NodeJS } from "../skills/NodeJS";
import { AntDesign } from "../skills/AntDesign";
import { AgGrid } from "../skills/AgGrid";
import { Python } from "../skills/Python";
import { PHP } from "../skills/PHP";
import { MySQL } from "../skills/MySQL";
import { SwaggerUI } from "../skills/SwaggerUI";
import { Webpack } from "../skills/Webpack";
import { SWR } from "../skills/SWR";
import { SyncFusion } from "../skills/SyncFusion";
import { ReactI18Next } from "../skills/ReactI18Next";
import { Jest } from "../skills/Jest";
import { LaunchDarkly } from "../skills/LaunchDarkly";
import { Vercel } from "../skills/Vercel";
import { AWS } from "../skills/AWS";
import { Postgres } from "../skills/Postgres";
import { NestJS } from "../skills/NestJS";
import { TypeORM } from "../skills/TypeORM";
import { Redis } from "../skills/Redis";
import { Motion } from "../skills/Motion";

export const Experience: React.FC = () => {
  return (
    <Section title="EXPERIENCE" icon={<FaBriefcase />} gap={8}>
      <ExperienceDetail
        company="Indigo Tech"
        title="Technical Lead"
        icon={IndigoTechGroupIcon}
        startDate="Feb 2022"
        description="Front-end focused full stack development with React, TS, Node.js, TypeORM, and Redis deployed in AWS"
        highlights={[
          "Reduced page load times by 75% (from ~1000ms to ~250ms) utilizing webpack optimizations, code-splitting, and lazy loading",
          "Developed and maintained technical documentation in Confluence for front-end design, coding standards, and best practices",
          "Built scalable API endpoints in Node.js to support application features and reliability",
          "Integrated an iframe payment solution into the POS checkout to stay PCI compliant",
          "Ensured app is prepared for i18n internationalization",
          "Designed and implemented strategies for using new libraries including AntDesign, AgGrid, SyncFusion, and SWR",
          "Implemented a strategy for hiding or changes features in real time through LaunchDarkly",
          "Regularly held knowledge sharing seminars to foster collaboration",
          "Developed a reusable library to ensure pixel-perfect, consistent theming across all apps",
          "Enhanced testing and strengthened TypeScript typing to improve application stability",
          "Mentored new hires, fostering a knowledge-sharing culture and supporting professional growth across the team",
          "DRI for different app areas (Retail Products, MainUX) creating documentation and specializing in understanding how the business logic translates to the app logic",
        ]}
        skills={[
          ReactSkill,
          TypeScript,
          AntDesign,
          SWR,
          AgGrid,
          SyncFusion,
          Webpack,
          Jest,
          NodeJS,
          ReactI18Next,
          LaunchDarkly,
          Motion,
          NestJS,
          Postgres,
          TypeORM,
          Redis,
          AWS,
        ]}
      />
      <ExperienceDetail
        company="Adyptation"
        title="Software Engineer"
        icon={AdyptationIcon}
        startDate="Jan 2022"
        endDate="Feb 2023"
        description="Lead web developer - Full stack development with React, Next.js, Node.js, React Native, GraphQL, Python, and Auth0"
        highlights={[
          "Initialized two new websites from scratch based on React, Next.js, and TypeScript",
          "Developed full stack by creating new API endpoints with tests in Node.js with GraphQL and integrated them into both web and mobile front ends with cross-platform hooks through React Query",
          "Used a custom UI library to ensure consistent user experience across platforms",
          "Ensured best security practices were used to prevent unauthorized access Nirvana UI Library",
          "Created a new React UI Library based on Chakra UI with documentation using Storybook",
          "Ensured pixel-perfect theming and styling consistency across web products",
          "Implemented custom animations using Framer Motion to add polishing touches",
          "Rigorous unit testing to ensure stability (100% coverage)",
          "Added new features including walkthroughs describing new features and several new forms for user settings and data collection",
        ]}
        skills={[
          ReactSkill,
          TypeScript,
          ChakraUI,
          NextJS,
          TanStackQuery,
          Jest,
          Motion,
          NodeJS,
          GraphQL,
          Webpack,
          Python,
          ReactNative,
          JavaScript,
          Vercel,
        ]}
      />
      <ExperienceDetail
        company="Paycom"
        title="Software Developer"
        icon={PaycomIcon}
        startDate="May 2020"
        endDate="Dec 2021"
        description="Full stack web development with React, PHP, and MySQL. Refactored, redesigned, and optimized web pages for a better user experience"
        highlights={[
          "Collaborated on design and integrated a RESTful API",
          "Integrated the use of mobile check scanning",
          "Achieved pixel-perfect design for seamless user experience",
          "Coordinated and documented a plan of implementation",
          "Reduced API traffic in the Form 1 Redesign project by 30%",
          "Collaborated to implement single and batch employee changes to scale",
          "Improved UI and stability by adding unit tests and enhancing functionality",
          "Utilized Swagger UI to ensure proper integration between the front and back ends",
        ]}
        skills={[
          ReactSkill,
          JavaScript,
          PHP,
          TypeScript,
          MySQL,
          Jest,
          SwaggerUI,
          ReactI18Next,
        ]}
      />
    </Section>
  );
};
