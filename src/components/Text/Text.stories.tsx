import { Meta, Story } from "@storybook/react";
import Text from "./Text";
import { TextProps } from "./Text.types";

export default {
  title: "Components/Text",
  component: Text,
  argTypes: {
    text: {
      control: "text",
      description: "The text content to be displayed by the component.",
    },
    disabled: {
      control: "boolean",
      description:
        "Toggle the disabled state of the text, altering its appearance and interaction.",
    },
    backgroundColor: {
      control: "color",
      description:
        "Allows changing the background color of the text component.",
    },
  },
} as Meta;

const Template: Story<TextProps> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "Default Text",
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: "Disabled Text",
  disabled: true,
};
