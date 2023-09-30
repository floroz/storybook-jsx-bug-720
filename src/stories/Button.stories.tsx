import type { Meta, StoryObj } from '@storybook/vue3';

import Button from './Button.vue';

const meta = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    backgroundColor: { control: 'color' },
    onClick: { action: 'clicked' },
  },
  args: { primary: false, label: "Click me" },
  render: (args) => ({
    setup() {
      return () => <div><Button {...args} /></div>
    }
  })
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    primary: false,
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    label: 'Button',
    size: 'large',
  },
};

export const Small: Story = {
  args: {
    label: 'Button',
    size: 'small',
  },
};
