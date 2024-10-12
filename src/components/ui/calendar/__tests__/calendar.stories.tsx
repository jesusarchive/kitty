import type { StoryDefault } from "@ladle/react";

import type { CalendarProps } from "..";
import { Scenario as CalendarDefault } from "./calendar.scenario";

export default {
  title: "components/ui/calendar",
} satisfies StoryDefault<CalendarProps>;

export const Calendar = () => <CalendarDefault />;
