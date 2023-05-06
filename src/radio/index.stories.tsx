/*
 * @Author: “邓浩” “1051766345@qq.com”
 * @Date: 2023-04-24 20:59:41
 * @LastEditors: “邓浩” “1051766345@qq.com”
 * @LastEditTime: 2023-05-06 20:55:05
 * @FilePath: /my-app/src/radio/index.stories.tsx
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import type { Meta, StoryObj } from '@storybook/react';
import Radio from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Radio> = {
  title: 'Example/Radio',
  component: Radio,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const unCheacked: Story =  {
  args: {
    checked:true,
    onChange: e => console.log(e),
    disabled:true,
  }
}

export const basic: Story = {
  args: {
    onChange: e => console.log(e),
  },
};


export const disabled: Story =  {
  args: {
    disabled:true
  }
}


export const checked: Story =  {
  args: {
    checked:true
  }
}

