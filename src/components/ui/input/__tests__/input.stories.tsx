import type { StoryDefault } from "@ladle/react";

import type { InputProps } from "..";
import { Scenario as InputDefault } from "./input.scenario";

export default {
  title: "components/ui/input",
} satisfies StoryDefault<InputProps>;

export const Input = () => <InputDefault />;
