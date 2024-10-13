import type { StoryDefault } from "@ladle/react";

import type { RadioGroupProps } from "..";
import { Scenario as RadioGroupDefault } from "./radio-group.scenario";

export default {
  title: "components/ui/radio-group",
} satisfies StoryDefault<RadioGroupProps>;

export const RadioGroup = () => <RadioGroupDefault />;
