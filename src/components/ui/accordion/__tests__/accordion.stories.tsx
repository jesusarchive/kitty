import type { StoryDefault } from "@ladle/react";

import { AccordionProps } from "..";
import { Scenario as AccordionDefault } from "./accordion.scenario";

export default {
  title: "components/ui/accordion",
} satisfies StoryDefault<AccordionProps>;

export const Accordion = () => <AccordionDefault />;
