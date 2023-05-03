/*
 * @Author: “邓浩” “1051766345@qq.com”
 * @Date: 2023-04-24 20:59:41
 * @LastEditors: “邓浩” “1051766345@qq.com”
 * @LastEditTime: 2023-05-03 16:57:59
 * @FilePath: /my-app/src/radio/index.test.tsx
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Radio from '.';

describe('Radio',() => {
  /* 组件渲染 */
  test('renders ', () => {
    render(<Radio>click me</Radio>);
    const linkElement = screen.getByText(/click me/i);
    expect(linkElement).toBeInTheDocument();
  });
  
  /* 组件样式 */
  test('renders Primary Radio', () => {
    const { container } =  render(<Radio>click me</Radio>);
    expect(container.querySelector('.ant-btn-primary')).toBeInTheDocument;
  });

  
  test('should suppot click', () => {
    const onChange = jest.fn();
    render(<Radio className='test' onChange={onChange}></Radio>);
    const linkElement = screen.getByText(/click me/i);
    fireEvent.change(linkElement)
    expect(onChange).toBeCalled();
  });

})
