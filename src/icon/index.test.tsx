import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Icon from '.';

describe('Icon',() => {
  test('renders fiexd', () => {
    const {debug,container} = render(<Icon type='fixed'></Icon>);
    const svg = container.querySelector('.ant-icon-fixed');
    expect(svg).toBeInTheDocument();
  });


  test('custom className', () => {
    const { container } =  render(<Icon type='fixed' className='custom'></Icon>);
    expect(container.querySelector('.custom')).toBeInTheDocument;
  });


  test('icon click',() => {
    // 模拟一个事件
    const onClick  = jest.fn();
    const {container} = render(<Icon type='fixed' OnClick={onClick}></Icon>);
    fireEvent.click(container.querySelector('.ant-icon-fixed') as HTMLElement);
    expect(onClick).toBeCalled;
  })
})

