import {
  FaEnvelope,
  FaGlobe,
  FaLocationDot,
  FaPhone,
  FaUser,
} from "react-icons/fa6";
import { ContactDetail } from "../components/ContactDetail";
import { Section } from "../components/Section";
import { SiGithub, SiLinkedin } from "react-icons/si";

export const Contacts = () => {
  return (
    <Section title="CONTACT" icon={<FaUser />}>
      <ContactDetail
        href="mailto:jkdrumm1@gmail.com"
        icon={<FaEnvelope />}
        label="Jkdrumm1@gmail.com"
      />
      <ContactDetail
        href="https://maps.app.goo.gl/mGPAai6qqdC7jJTP7"
        icon={<FaLocationDot />}
        label="Edmond, OK"
      />
      <ContactDetail
        href="https://www.jkdrumm.com"
        icon={<FaGlobe />}
        label="www.jkdrumm.com"
      />
      <ContactDetail
        href="tel:4056282034"
        icon={<FaPhone />}
        label="(405) 628-2034"
      />
      <ContactDetail
        href="https://www.linkedin.com/in/jkdrumm/"
        icon={<SiLinkedin />}
        label="@Jkdrumm"
      />
      <ContactDetail
        href="https://github.com/Jkdrumm"
        icon={<SiGithub />}
        label="@Jkdrumm"
      />
    </Section>
  );
};
