"use client";
import { SkillUsedDetail } from "../components/SkillUsedDetail";
import { SkillListItemProps } from "../components/SkillList";
import { SiSwagger } from "react-icons/si";
import { SwaggerUIColorIcon } from "@/components/icons/SwaggerUIColor";

export const SwaggerUI: React.FC<SkillListItemProps> = (props) => {
  return (
    <SkillUsedDetail
      name="Swagger UI"
      description="Swagger UI allows anyone — be it your development team or your end consumers — to visualize and interact with the API’s resources without having any of the implementation logic in place. It’s automatically generated from your OpenAPI (formerly known as Swagger) Specification, with the visual documentation making it easy for back end implementation and client side consumption."
      icon={<SiSwagger />}
      colorIcon={SwaggerUIColorIcon}
      href="https://swagger.io/tools/swagger-ui/"
      {...props}
    />
  );
};
