import type { StoryDefault } from "@ladle/react";

import { AlertDialogProps } from "..";
import { Scenario as AlertDialogDefault } from "./alert-dialog.scenario";

export default {
  title: "components/ui/alert-dialog",
} satisfies StoryDefault<AlertDialogProps>;

export const AlertDialog = () => <AlertDialogDefault />;
