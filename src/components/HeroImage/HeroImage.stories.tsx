// HeroImage.stories.tsx
import { Meta, Story } from "@storybook/react";
import HeroImage from "./HeroImage";
import { HeroImageProps } from "./HeroImage.types";

export default {
  title: "Components/HeroImage",
  component: HeroImage,
  argTypes: {
    src: { control: "text", description: "Image source URL" },
    alt: {
      control: "text",
      description: "Image alternative text for accessibility",
    },
    disabled: {
      control: "boolean",
      description: "Toggle disabled state of the image",
    },
    backgroundColor: {
      control: "color",
      description: "Background color when disabled",
    },
    introduction: { control: "text", description: "Introduction text" },
  },
} as Meta;

const Template: Story<HeroImageProps> = (args) => <HeroImage {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: "https://via.placeholder.com/600x400",
  alt: "Hero Image",
  introduction: "Introduction Text",
  disabled: false,
  backgroundColor: "#ffffff",
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};
