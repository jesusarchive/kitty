import type { StoryDefault } from "@ladle/react";

import type { ButtonProps } from "..";
import { Scenario as ButtonDefault } from "./button.scenario";

export default {
  title: "components/ui/button",
} satisfies StoryDefault<ButtonProps>;

export const Button = () => <ButtonDefault />;
