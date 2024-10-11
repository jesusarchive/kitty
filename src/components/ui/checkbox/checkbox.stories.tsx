import type { Story, StoryDefault } from "@ladle/react";
import Checkbox, { type CheckboxProps } from "./checkbox";
import { useState } from "react";

export default {
  title: "components/ui/checkbox",
} satisfies StoryDefault<CheckboxProps>;

export const Example: Story<CheckboxProps> = (props: CheckboxProps) => {
  const [checked, setChecked] = useState(false);
  return (
    <Checkbox
      {...props}
      checked={checked}
      onClick={() => setChecked(!checked)}
    />
  );
};
