import { Meta, Story } from "@storybook/react";
import Button from "./Button";
import { ButtonProps } from "./Button.types";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
    text: { control: "text" },
  },
} as Meta;

// creating a Button story with dynamic arguments.
const Template: Story<ButtonProps> = (args) => <Button {...args} />;

// Primary story for the Button component
export const Primary = Template.bind({});
Primary.args = {
  text: "Primary Button",
};

// Disabled story for the Button component
export const Disabled = Template.bind({});
Disabled.args = {
  text: "Disabled Button",
  disabled: true,
};
