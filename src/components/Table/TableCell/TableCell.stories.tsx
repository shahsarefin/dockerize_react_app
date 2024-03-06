import { Meta, Story } from "@storybook/react";
import TableCell from "./TableCell";

export default {
  title: "Components/Table/TableCell",
  component: TableCell,
} as Meta;

const Template: Story<{ cell: any; disabled?: boolean }> = (args) => (
  <TableCell {...args} />
);

export const Default = Template.bind({});
Default.args = {
  cell: "John Doe",
};

export const Disabled = Template.bind({});
Disabled.args = {
  cell: "John Doe",
  disabled: true,
};
