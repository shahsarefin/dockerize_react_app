import { Meta, Story } from "@storybook/react";
import TableRow from "./TableRow";

export default {
  title: "Components/Table/TableRow",
  component: TableRow,
} as Meta;

const Template: Story<{ row: any; disabled?: boolean }> = (args) => (
  <TableRow {...args} />
);

export const Default = Template.bind({});
Default.args = {
  row: { name: "John Doe", age: 30 },
};

export const Disabled = Template.bind({});
Disabled.args = {
  row: { name: "John Doe", age: 30 },
  disabled: true,
};
