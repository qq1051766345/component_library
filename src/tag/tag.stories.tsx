import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Tag from ".";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Tag> = {
  title: "Example/Tag",
  component: Tag,
  // 自动生成文档
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Basic = () => {
  return (
    <>
      <Tag closeable={true}>Tag 1</Tag>
      <Tag color="magenta" closeable={true}>magenta</Tag>
      <Tag color="red">red</Tag>
      <Tag color="volcano">volcano</Tag>
      <Tag color="orange">orange</Tag>
      <Tag color="gold">gold</Tag>
      <Tag color="lime">lime</Tag>
      <Tag color="green">green</Tag>
      <Tag color="cyan">cyan</Tag>
      <Tag color="blue">blue</Tag>
      <Tag color="geekblue">geekblue</Tag>
      <Tag color="purple">purple</Tag>
      <Tag color="#f50">#f50</Tag>
      <Tag color="#2db7f5">#2db7f5</Tag>
      <Tag color="#87d068">#87d068</Tag>
      <Tag color="#108ee9">#108ee9</Tag>
      {/*  <Tag closable onClose={log}>
      Tag 2
    </Tag>
    <Tag closable onClose={preventDefault}>
      Prevent Default
    </Tag> */}
    </>
  );
};
