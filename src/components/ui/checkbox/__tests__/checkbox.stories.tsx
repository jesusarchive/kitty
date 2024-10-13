import type { StoryDefault } from "@ladle/react";

import type { CheckboxProps } from "..";
import { Scenario as CheckboxDefault } from "./checkbox.scenario";

export default {
  title: "components/ui/checkbox",
} satisfies StoryDefault<CheckboxProps>;

export const Checkbox = () => <CheckboxDefault />;
