import type { StoryDefault, Story } from "@ladle/react";
import Button, { ButtonProps } from "./button";

export default {
  title: "Button",
} satisfies StoryDefault<ButtonProps>;

export const Example: Story<ButtonProps> = (props) => <Button {...props} />;

Example.argTypes = {
  variant: {
    control: { type: "select" },
    options: ["primary", "secondary", "danger", "ghost"],
    defaultValue: "default",
  },
};
