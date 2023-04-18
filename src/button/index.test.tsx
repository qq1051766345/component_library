import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Button from '.';

describe('Button',() => {
  test('renders button', () => {
    render(<Button>click me</Button>);
    const linkElement = screen.getByText(/click me/i);
    expect(linkElement).toBeInTheDocument();
  });
  
  test('renders Normal Button', () => {
    const { container } =  render(<Button>click me</Button>);
    expect(container.querySelector('.ant-btn-primary')).toBeInTheDocument;
  });
  
  test('renders Primary Button', () => {
    const { container } =  render(<Button type='primary'>click me</Button>);
    expect(container.querySelector('.ant-btn-primary')).toBeInTheDocument;
  });


  test('should suppot click', () => {
    const onClick = jest.fn();
    render(<Button type='primary' onClick={onClick}>click me</Button>);
    const linkElement = screen.getByText(/click me/i);
    fireEvent.click(linkElement)
    expect(onClick).toBeCalled();
  });


  test('should suppot blur', () => {
    const onBlur = jest.fn();
    render(<Button type='primary' onBlur={onBlur}>click me</Button>);
    const linkElement = screen.getByText(/click me/i);
    fireEvent.click(linkElement);
    fireEvent.blur(linkElement);
    expect(onBlur).toBeCalled();
  });


  test('should suppot focus', () => {
    const onFocus = jest.fn();
    render(<Button type='primary' onFocus={onFocus}>click me</Button>);
    const linkElement = screen.getByText(/click me/i);
    fireEvent.focus(linkElement);
    expect(onFocus).toBeCalled();
  });


  test('button size', () => {
    const {debug} = render(<Button type='primary' size='lg'>click me</Button>);
    const linkElement = screen.getByText(/click me/i);
    debug(linkElement);
    expect(linkElement).toHaveClass('ant-btn-lg')
  });
})

