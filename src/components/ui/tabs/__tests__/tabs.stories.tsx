import type { StoryDefault } from "@ladle/react";

import type { TabsProps } from "..";
import { Scenario as TabsDefault } from "./tabs.scenario";

export default {
  title: "components/ui/tabs",
} satisfies StoryDefault<TabsProps>;

export const Tabs = () => <TabsDefault />;
