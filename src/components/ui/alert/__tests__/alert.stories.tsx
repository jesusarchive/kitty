import { Scenario as AlertDefault } from "./alert.scenario";
import { StoryDefault } from "@ladle/react";
import { AlertProps } from "..";

export default {
  title: "components/ui/alert",
} satisfies StoryDefault<AlertProps>;

export const Alert = () => <AlertDefault />;
