import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Checkbox from '.';

describe('Checkbox',() => {
  /* 组件渲染 */
  test('renders ', () => {
    render(<Checkbox>click me</Checkbox>);
    const linkElement = screen.getByText(/click me/i);
    expect(linkElement).toBeInTheDocument();
  });
  
  /* 组件样式 */
  test('renders Primary Checkbox', () => {
    const { container } =  render(<Checkbox type='primary'>click me</Checkbox>);
    expect(container.querySelector('.ant-btn-primary')).toBeInTheDocument;
  });

  
  test('should suppot click', () => {
    const onClick = jest.fn();
    render(<Checkbox type='primary' onClick={onClick}>click me</Checkbox>);
    const linkElement = screen.getByText(/click me/i);
    fireEvent.click(linkElement)
    expect(onClick).toBeCalled();
  });

  /* 组件大小 */
  test(' size', () => {
    const {debug} = render(<Checkbox type='primary' size='lg'>click me</Checkbox>);
    const linkElement = screen.getByText(/click me/i);
    debug(linkElement);
    expect(linkElement).toHaveClass('ant-btn-lg')
  });
})
