import type { StoryDefault } from "@ladle/react";

import type { LabelProps } from "..";
import { Scenario as LabelDefault } from "./label.scenario";

export default {
  title: "components/ui/label",
} satisfies StoryDefault<LabelProps>;

export const Label = () => <LabelDefault />;
