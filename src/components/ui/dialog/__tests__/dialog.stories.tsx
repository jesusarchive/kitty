import type { StoryDefault } from "@ladle/react";

import type { DialogProps } from "..";
import { Scenario as DialogDefault } from "./dialog.scenario";

export default {
  title: "components/ui/dialog",
} satisfies StoryDefault<DialogProps>;

export const Dialog = () => <DialogDefault />;
