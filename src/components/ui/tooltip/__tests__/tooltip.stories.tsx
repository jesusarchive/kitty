import type { StoryDefault } from "@ladle/react";

import type { TooltipProps } from "..";
import { Scenario as TooltipDefault } from "./tooltip.scenario";

export default {
  title: "components/ui/tooltip",
} satisfies StoryDefault<TooltipProps>;

export const Tooltip = () => <TooltipDefault />;
