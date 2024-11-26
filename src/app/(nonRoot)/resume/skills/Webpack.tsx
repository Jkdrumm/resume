"use client";
import { SkillUsedDetail } from "../components/SkillUsedDetail";
import { SkillListItemProps } from "../components/SkillList";
import { SiWebpack } from "react-icons/si";
import { WebpackColorIcon } from "@/components/icons/WebpackColorIcon";

export const Webpack: React.FC<SkillListItemProps> = (props) => {
  return (
    <SkillUsedDetail
      name="Webpack"
      description="At its core, webpack is a static module bundler for modern JavaScript applications. When webpack processes your application, it internally builds a dependency graph from one or more entry points and then combines every module your project needs into one or more bundles, which are static assets to serve your content from."
      icon={<SiWebpack />}
      colorIcon={WebpackColorIcon}
      href="https://webpack.js.org/"
      {...props}
    />
  );
};
