import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  type TooltipProps,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";
import type { Story, StoryDefault } from "@ladle/react";

export default {
  title: "components/ui/tooltip",
} satisfies StoryDefault<TooltipProps>;

export const TooltipDemo: Story<TooltipProps> = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
