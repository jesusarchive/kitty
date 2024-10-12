import type { Story, StoryDefault } from "@ladle/react";
import Input, { type InputProps } from "./input";
import { useState } from "react";

export default {
  title: "components/ui/input",
} satisfies StoryDefault<InputProps>;

export const InputDemo: Story<InputProps> = (props) => {
  const [value, setValue] = useState(props.value);
  return (
    <Input
      {...props}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
