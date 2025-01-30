import { Meta, StoryObj } from "@storybook/react";
import { DataTable } from "./DataTable";

const meta = {
  title: "DataTable",
  component: DataTable,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    columns: { control: "object" },
  },
} satisfies Meta<typeof DataTable>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    columns: [{ label: "Name" }, { label: "Status" }],
  },
};
