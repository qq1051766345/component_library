import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Button from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  /* argTypes: {
    type: { 
      primary:true,
      children:'button'
    },
  }, */
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Primary: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: { 
    type: 'primary',
    children: 'Button',
  },
};
const style = {
  marginLeft: 8
}
export const basic = () => {
  return <>
    <Button type='primary' style={style}>Primary Button</Button>
    <Button style={style}>default Button</Button>
    <Button style={style} type="dashed">dashed Button</Button>
    <Button style={style} type="link">link Button</Button>
    <Button style={style} type="primary" size='lg'>large Button</Button>
    <Button style={style} type="primary" size='sm'>small Button</Button>
  </>
}