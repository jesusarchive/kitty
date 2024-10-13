import type { StoryDefault } from "@ladle/react";

import type { TableProps } from "..";
import { Scenario as TableDefault } from "./table.scenario";

export default {
  title: "components/ui/table",
} satisfies StoryDefault<TableProps>;

export const Table = () => <TableDefault />;
