import type { Story, StoryDefault } from "@ladle/react";
import Avatar, {
  type AvatarProps,
  AvatarImage,
  AvatarFallback,
} from "./avatar";

export default {
  title: "components/ui/avatar",
} satisfies StoryDefault<AvatarProps>;

export const AvatarDemo: Story<AvatarProps> = () => {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};
