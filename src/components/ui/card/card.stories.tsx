import type { Story, StoryDefault } from "@ladle/react";
import Card, {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardProps,
  CardTitle,
} from "./card";
import { Label } from "@radix-ui/react-label";
import Button from "../button";
import Input from "../input";

export default {
  title: "components/ui/card",
} satisfies StoryDefault<CardProps>;

export const Example: Story<CardProps> = (props) => (
  <Card className="w-[350px]" {...props}>
    <CardHeader>
      <CardTitle>Create project</CardTitle>
      <CardDescription>Deploy your new project in one-click.</CardDescription>
    </CardHeader>
    <CardContent>
      <form>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Name of your project" />
          </div>
        </div>
      </form>
    </CardContent>
    <CardFooter className="flex justify-between">
      <Button variant="outline">Cancel</Button>
      <Button>Deploy</Button>
    </CardFooter>
  </Card>
);
