import type { Story, StoryDefault } from "@ladle/react";

import Button, { type ButtonProps } from "./button";

export default {
  title: "components/ui/button",
} satisfies StoryDefault<ButtonProps>;

export const ButtonDemo: Story<ButtonProps> = () => (
  <Button onClick={console.log}>Button</Button>
);
