import type { StoryDefault } from "@ladle/react";

import { AspectRatioProps } from "..";
import { Scenario as AspectRatioDefault } from "./aspect-ratio.scenario";

export default {
  title: "components/ui/aspect-ratio",
} satisfies StoryDefault<AspectRatioProps>;

export const AspectRatio = () => <AspectRatioDefault />;
