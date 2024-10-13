import type { StoryDefault } from "@ladle/react";

import { BadgeProps } from "..";
import { Scenario as BadgeDefault } from "./bagde.scenario";

export default {
  title: "components/ui/badge",
} satisfies StoryDefault<BadgeProps>;

export const Badge = () => <BadgeDefault />;
