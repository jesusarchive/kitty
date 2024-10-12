import type { StoryDefault } from "@ladle/react";

import type { PopoverProps } from "..";
import { Scenario as PopoverDefault } from "./popover.scenario";

export default {
  title: "components/ui/popover",
} satisfies StoryDefault<PopoverProps>;

export const Popover = () => <PopoverDefault />;
