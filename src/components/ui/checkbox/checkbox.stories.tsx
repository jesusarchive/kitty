import type { Story, StoryDefault } from "@ladle/react";
import Checkbox, { type CheckboxProps } from "./checkbox";

export default {
  title: "components/ui/checkbox",
} satisfies StoryDefault<CheckboxProps>;

export const Example: Story<CheckboxProps> = () => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label>
    </div>
  );
};
