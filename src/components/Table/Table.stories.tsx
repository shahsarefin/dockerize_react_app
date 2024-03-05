import { Meta, Story } from "@storybook/react";
import Table from "./Table";
import { TableProps } from "./Table.types";

export default {
  title: "Components/Table",
  component: Table,
  argTypes: {
    backgroundColor: { control: "color" },
    disabled: { control: "boolean" },
  },
} as Meta;

const Template: Story<TableProps> = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: [
    { name: "John Doe", age: 30 },
    { name: "Jane Wow", age: 25 },
  ],
  headers: ["Name", "Age"],
  footer: "Table Footer",
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};
