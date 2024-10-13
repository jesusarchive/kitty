import type { StoryDefault } from "@ladle/react";

import type { SheetProps } from "..";
import { Scenario as SheetDefault } from "./sheet.scenario";

export default {
  title: "components/ui/sheet",
} satisfies StoryDefault<SheetProps>;

export const Sheet = () => <SheetDefault />;
