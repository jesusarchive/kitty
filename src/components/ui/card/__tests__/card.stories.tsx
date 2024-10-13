import type { StoryDefault } from "@ladle/react";

import type { CardProps } from "..";
import { Scenario as CardDefault } from "./card.scenario";

export default {
  title: "components/ui/card",
} satisfies StoryDefault<CardProps>;

export const Card = () => <CardDefault />;
