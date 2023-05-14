import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Checkbox from '.';

const Group = Checkbox.Group;
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Group> = {
  title: 'Example/CheckBoxGroup',
  component: Group,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Group>;


export const CheckBoxGroup: Story =  {
  args: {
    children:[
      <Checkbox value="1" key="1">选项1</Checkbox>,
      <Checkbox value="2" key="2">选项2</Checkbox>,
      <Checkbox value="3" key="3">选项3</Checkbox>
    ],
  }
}


export const contextValue: Story =  {
  args: {
    defaultValue:["1","2"],
    children:[
      <span><Checkbox value="1" key="1">选项1</Checkbox></span>,
      <span><Checkbox value="2" key="2">选项2</Checkbox></span>,
    ],
  }
}