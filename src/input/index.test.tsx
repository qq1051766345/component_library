import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Input from '.';

describe('Input',() => {
  /* 组件渲染 */
  test('renders ', () => {
    render(<Input>click me</Input>);
    const linkElement = screen.getByText(/click me/i);
    expect(linkElement).toBeInTheDocument();
  });
  
  /* 组件样式 */
  test('renders Primary Input', () => {
    const { container } =  render(<Input type='primary'>click me</Input>);
    expect(container.querySelector('.ant-btn-primary')).toBeInTheDocument;
  });

  
  test('should suppot click', () => {
    const onClick = jest.fn();
    render(<Input type='primary' onClick={onClick}>click me</Input>);
    const linkElement = screen.getByText(/click me/i);
    fireEvent.click(linkElement)
    expect(onClick).toBeCalled();
  });

  /* 组件大小 */
  test(' size', () => {
    const {debug} = render(<Input type='primary' size='lg'>click me</Input>);
    const linkElement = screen.getByText(/click me/i);
    debug(linkElement);
    expect(linkElement).toHaveClass('ant-btn-lg')
  });
})
