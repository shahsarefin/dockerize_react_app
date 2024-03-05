import { Meta, Story } from "@storybook/react";
import Img from "./Img";
import { ImgProps } from "./Img.types";

export default {
  title: "Components/Img",
  component: Img,
  argTypes: {
    src: { control: "text" },
    alt: { control: "text" },
    disabled: { control: "boolean" },
    backgroundColor: {
      control: "color",
      description:
        "Background color of the image wrapper, visible when disabled or as padding.",
    },
  },
} as Meta;

const Template: Story<ImgProps> = (args) => <Img {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: "https://via.placeholder.com/150",
  alt: "Placeholder Image",
  disabled: false,
  backgroundColor: "transparent",
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
  backgroundColor: "lightgray",
};
