import type { StoryDefault } from "@ladle/react";

import type { TextareaProps } from "..";
import { Scenario as TextareaDefault } from "./textarea.scenario";

export default {
  title: "components/ui/textarea",
} satisfies StoryDefault<TextareaProps>;

export const Textarea = () => <TextareaDefault />;
