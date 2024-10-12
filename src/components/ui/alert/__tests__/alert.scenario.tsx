import { Terminal } from "lucide-react";

import Alert, { AlertDescription, AlertTitle } from "..";

export const Scenario = () => {
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
