import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Input from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Input> = {
  title: 'Example/Input',
  component: Input,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const basic = () => {
  return <>
    <Input type="primary"></Input>
  </>
}
