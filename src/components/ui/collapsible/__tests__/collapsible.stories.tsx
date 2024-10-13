import type { StoryDefault } from "@ladle/react";

import type { CollapsibleProps } from "..";
import { Scenario as CollapsibleDefault } from "./collapsible.scenario";

export default {
  title: "components/ui/collapsible",
} satisfies StoryDefault<CollapsibleProps>;

export const Collapsible = () => <CollapsibleDefault />;
