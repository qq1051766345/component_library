/*
 * @Author: “邓浩” “1051766345@qq.com”
 * @Date: 2023-04-24 20:59:41
 * @LastEditors: “邓浩” “1051766345@qq.com”
 * @LastEditTime: 2023-05-14 14:26:21
 * @FilePath: /my-app/src/radio/group.stories.tsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Radio from ".";


const RadioGroup = Radio.Group

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof RadioGroup> = {
  title: "Example/RadioGroup",
  component: RadioGroup,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const GroupRadio: Story = {
  args: {
    children: [
      <Radio key="1" value="1">
        选项1
      </Radio>,
      <Radio key="2" value="2">
        选项2
      </Radio>,
      <Radio key="3" value="3">
        选项3
      </Radio>,
    ],
  },
};

export const underControl = () => {
  return <>
    <RadioGroup value="2">
      <Radio value="1" key={1}>选项1</Radio>
      <Radio value="2" key={2}>选项2</Radio>
      <Radio value="3" key={3}>选项3</Radio>,
    </RadioGroup>
  </>
};
