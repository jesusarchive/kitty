import type { StoryDefault } from "@ladle/react";

import type { SwitchProps } from "..";
import { Scenario as SwitchDefault } from "./switch.scenario";

export default {
  title: "components/ui/switch",
} satisfies StoryDefault<SwitchProps>;

export const Switch = () => <SwitchDefault />;
