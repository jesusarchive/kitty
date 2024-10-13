import type { StoryDefault } from "@ladle/react";

import { CommandProps } from "..";
import { Scenario as CommandDefault } from "./command.scenario";

export default {
  title: "components/ui/command",
} satisfies StoryDefault<CommandProps>;

export const Command = () => <CommandDefault />;
