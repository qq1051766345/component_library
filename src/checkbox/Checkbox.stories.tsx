import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Checkbox from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Checkbox> = {
  title: 'Example/Checkbox',
  component: Checkbox,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;


export const CheckBox: Story =  {
  args: {
    children:"checkbox",
    onChange: e => console.log(e),
  }
}