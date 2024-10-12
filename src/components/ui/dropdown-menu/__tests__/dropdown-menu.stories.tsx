import type { StoryDefault } from "@ladle/react";

import type { DropdownMenuProps } from "..";
import { Scenario as DropdownMenuDefault } from "./dropdown-menu.scenario";

export default {
  title: "components/ui/dropdown-menu",
} satisfies StoryDefault<DropdownMenuProps>;

export const DropdownMenu = () => <DropdownMenuDefault />;
