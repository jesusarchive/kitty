import type { StoryDefault } from "@ladle/react";

import type { SelectProps } from "..";
import { Scenario as SelectDefault } from "./select.scenario";

export default {
  title: "components/ui/select",
} satisfies StoryDefault<SelectProps>;

export const Select = () => <SelectDefault />;
