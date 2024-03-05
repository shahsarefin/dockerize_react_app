// RadioButton.stories.tsx
import { Meta, Story } from "@storybook/react";
import RadioButton from "./RadioButton";
import { RadioButtonProps } from "./RadioButton.types";

export default {
  title: "Components/RadioButton",
  component: RadioButton,
  argTypes: {
    label: { control: "text" },
    disabled: { control: "boolean" },
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<RadioButtonProps> = (args) => <RadioButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Option 1",
  name: "default",
  value: "option1",
  checked: false,
  disabled: false,
  backgroundColor: "#dddddd",
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  label: "Disabled Option",
  disabled: true,
};
