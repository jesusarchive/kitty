import type { StoryDefault } from "@ladle/react";

import type { FormProps } from "..";
import { Scenario as FormDefault } from "./form.scenario";

export default {
  title: "components/ui/form",
} satisfies StoryDefault<FormProps>;

export const Form = () => <FormDefault />;
