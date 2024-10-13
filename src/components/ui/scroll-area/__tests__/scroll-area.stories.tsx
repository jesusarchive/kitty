import type { StoryDefault } from "@ladle/react";

import type { ScrollAreaProps } from "..";
import { Scenario as ScrollAreaDefault } from "./scroll-area.scenario";

export default {
  title: "components/ui/scroll-area",
} satisfies StoryDefault<ScrollAreaProps>;

export const ScrollArea = () => <ScrollAreaDefault />;
