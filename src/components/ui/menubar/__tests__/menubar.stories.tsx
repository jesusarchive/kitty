import type { StoryDefault } from "@ladle/react";

import type { MenubarProps } from "..";
import { Scenario as MenubarDefault } from "./menubar.scenario";

export default {
  title: "components/ui/menubar",
} satisfies StoryDefault<MenubarProps>;

export const Menubar = () => <MenubarDefault />;
