import type { Story, StoryDefault } from "@ladle/react";

import { Terminal } from "lucide-react";
import Alert, { AlertDescription, type AlertProps, AlertTitle } from "./alert";

export default {
  title: "components/ui/alert",
} satisfies StoryDefault<AlertProps>;

export const AlertDemo: Story<AlertProps> = () => {
  return (
    <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        This is a warning. It&apos;s not a big deal, but you should be aware of
        it.
      </AlertDescription>
    </Alert>
  );
};
