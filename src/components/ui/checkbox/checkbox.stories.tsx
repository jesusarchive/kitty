import { Story, StoryDefault } from "@ladle/react";
import { Checkbox, CheckboxProps } from "./checkbox";

export default {
  title: "Checkbox",
} satisfies StoryDefault<CheckboxProps>;

export const Example: Story<CheckboxProps> = ({ checked }) => (
  <Checkbox checked={checked} />
);

Example.args = {
  checked: true,
};
