import { Scenario as AccordionDefault } from "./accordion.scenario";
import { StoryDefault } from "@ladle/react";
import { AccordionProps } from "..";

export default {
  title: "components/ui/accordion",
} satisfies StoryDefault<AccordionProps>;

export const Accordion = () => <AccordionDefault />;
