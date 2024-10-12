import { StoryDefault } from "@ladle/react";

import { AlertProps } from "..";
import { Scenario as AlertDefault } from "./alert.scenario";

export default {
  title: "components/ui/alert",
} satisfies StoryDefault<AlertProps>;

export const Alert = () => <AlertDefault />;
