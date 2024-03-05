// Card.stories.tsx
import { Meta, Story } from "@storybook/react";
import Card from "./Card";
import { CardProps } from "./Card.types";

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {
    text: { control: "text" },
    disabled: { control: "boolean" },
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "This is a card Sample",
  disabled: false,
  backgroundColor: "#ffffff",
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  text: "This card is in disabled state",
  disabled: true,
  backgroundColor: "#dddddd",
};
