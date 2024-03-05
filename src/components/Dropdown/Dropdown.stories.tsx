import { Meta, Story } from "@storybook/react";
import Dropdown from "./Dropdown";

import { DropdownProps } from "./Dropdown.types";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
  argTypes: {
    backgroundColor: {
      control: "color",
      description: "Changes the background color of the dropdown button.",
    },
  },
} as Meta;

const Template: Story<DropdownProps> = (args) => <Dropdown {...args} />;

// Default story
export const Default = Template.bind({});
Default.args = {
  defaultText: "Select Option",
  options: [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3" },
  ],
  backgroundColor: "black",
  disabled: false,
};

// Disabled story
export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};
