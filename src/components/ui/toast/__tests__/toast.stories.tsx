import type { StoryDefault } from "@ladle/react";

import type { ToastProps } from "..";
import { Scenario as ToastDefault } from "./toast.scenario";

export default {
  title: "components/ui/toast",
} satisfies StoryDefault<ToastProps>;

export const Toast = () => <ToastDefault />;
