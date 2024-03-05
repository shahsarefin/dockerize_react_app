import { Meta, Story } from "@storybook/react/types-6-0";
import Label from "./Label";
import { LabelProps } from "./Label.types";

export default {
  title: "Components/Label",
  component: Label,
  argTypes: {
    // controls for interacting with the component in Storybook
    text: { control: "text" },
    backgroundColor: { control: "color" },
    disabled: { control: "boolean" },
    visible: { control: "boolean" },
  },
} as Meta;

const Template: Story<LabelProps> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "Sample Label Text",
  visible: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
  backgroundColor: "#cccccc",
};
