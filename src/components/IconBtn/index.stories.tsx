import { fn } from "storybook/test";
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import Index from './index';
import { FaHome } from "react-icons/fa";

const meta = {
  component: Index,
} satisfies Meta<typeof Index>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    "type": "submit",
    "clickEvent": fn(),
    "Icon": FaHome
  },
};