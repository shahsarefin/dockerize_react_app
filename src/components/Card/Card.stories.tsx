// Card.stories.tsx

import { Meta, Story } from "@storybook/react";
import Card from "./Card";
import { CardProps } from "./Card.types";

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {
    imageSrc: { control: "text" },
    title: { control: "text" },
    techStack: { control: "array" },
    disabled: { control: "boolean" },
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageSrc: "/path/to/image.jpg",
  title: "Project Title",
  techStack: ["JavaScript", "React", "Next.js"],
  disabled: false,
  backgroundColor: "#ffffff",
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
  backgroundColor: "#dddddd",
};
