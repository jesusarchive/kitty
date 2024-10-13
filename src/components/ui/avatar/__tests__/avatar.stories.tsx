import type { StoryDefault } from "@ladle/react";

import { AvatarProps } from "..";
import { Scenario as AvatarDefault } from "./avatar.scenario";

export default {
  title: "components/ui/avatar",
} satisfies StoryDefault<AvatarProps>;

export const Avatar = () => <AvatarDefault />;
