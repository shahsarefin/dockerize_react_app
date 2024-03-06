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
    size: {
      control: { type: "select", options: ["title", "description", "footer"] },
      description: "Adjusts the size of the text based on its intended use.",
    },
  },
} as Meta;

const Template: Story<TextProps> = (args) => <Text {...args} />;

export const TitleText = Template.bind({});
TitleText.args = {
  text: "This is a Title",
  size: "title",
};

export const DescriptionText = Template.bind({});
DescriptionText.args = {
  text: "This is a description text. It's longer and provides more detailed information about something.",
  size: "description",
};

export const FooterText = Template.bind({});
FooterText.args = {
  text: "Footer Text",
  size: "footer",
};
