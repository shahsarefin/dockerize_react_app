import { Meta, Story } from "@storybook/react";
import TableFooter from "./TableFooter";

export default {
  title: "Components/Table/TableFooter",
  component: TableFooter,
} as Meta;

const Template: Story<{ footer: string; disabled?: boolean }> = (args) => (
  <TableFooter {...args} />
);

export const Default = Template.bind({});
Default.args = {
  footer: "Table Footer",
};

export const Disabled = Template.bind({});
Disabled.args = {
  footer: "Table Footer",
  disabled: true,
};
