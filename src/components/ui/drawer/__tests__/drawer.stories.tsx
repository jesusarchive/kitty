import type { StoryDefault } from "@ladle/react";

import type { DrawerProps } from "..";
import { Scenario as DrawerDefault } from "./drawer.scenario";

export default {
  title: "components/ui/drawer",
} satisfies StoryDefault<DrawerProps>;

export const Drawer = () => <DrawerDefault />;
