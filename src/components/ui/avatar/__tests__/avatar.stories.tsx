import { Scenario as AvatarDefault } from "./avatar.scenario";
import { StoryDefault } from "@ladle/react";
import { AvatarProps } from "..";

export default {
  title: "components/ui/avatar",
} satisfies StoryDefault<AvatarProps>;

export const Avatar = () => <AvatarDefault />;
