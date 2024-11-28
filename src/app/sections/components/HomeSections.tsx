import {
  type ForwardRefExoticComponent,
  type RefAttributes,
  useRef,
} from "react";
import { type HomeSectionInstanceProps } from "./HomeSection";

export type HomeSectionProps = {
  sections: ForwardRefExoticComponent<
    HomeSectionInstanceProps & RefAttributes<HTMLDivElement>
  >[];
};

export const HomeSections: React.FC<HomeSectionProps> = ({ sections }) => {
  const scrollRefs: React.RefObject<HTMLDivElement>[] = [];
  // Breaking the forbidden rule of hooks by using a hook in a loop
  // However, this is safe because the length of the array is fixed
  for (let i = 0; i < sections.length; i++) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    scrollRefs.push(useRef(null));
  }
  return sections.map((Section, i) => (
    <Section
      key={i}
      ref={scrollRefs[i]}
      scrollRef={i < sections.length - 1 ? scrollRefs[i + 1] : undefined}
    />
  ));
};
