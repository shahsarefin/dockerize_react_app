import { Meta, Story } from "@storybook/react";
import TableHeader from "./TableHeader";

export default {
  title: "Components/Table/TableHeader",
  component: TableHeader,
} as Meta;

const Template: Story<{ headers: string[] }> = (args) => (
  <TableHeader {...args} />
);

export const Default = Template.bind({});
Default.args = {
  headers: ["Name", "Age"],
};

export const Disabled = Template.bind({});
Disabled.args = {
  headers: ["Name", "Age"],
  disabled: true,
};
