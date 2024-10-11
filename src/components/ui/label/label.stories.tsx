import type { Story, StoryDefault } from "@ladle/react";
import Label, { type LabelProps } from "./label";

export default {
  title: "components/ui/label",
} satisfies StoryDefault<LabelProps>;

export const Example: Story<LabelProps> = () => <Label>Label</Label>;
