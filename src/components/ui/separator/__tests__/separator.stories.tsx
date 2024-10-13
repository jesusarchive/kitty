import type { StoryDefault } from "@ladle/react";

import type { SeparatorProps } from "..";
import { Scenario as SeparatorDefault } from "./separator.scenario";

export default {
  title: "components/ui/separator",
} satisfies StoryDefault<SeparatorProps>;

export const Separator = () => <SeparatorDefault />;
