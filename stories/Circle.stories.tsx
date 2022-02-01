import { Circle as CircleComponent, CircleProps } from "./Circle";
import { Story } from "@storybook/react";

export default {
  title: "Circle",
  component: CircleComponent,
};

export const Circle: Story<CircleProps> = (args) => (
  <CircleComponent {...args} />
);

Circle.args = {
  id: "id",
};
