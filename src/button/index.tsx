import React, { ReactNode } from "react";
import classNames from "classnames";
import './index.scss'

interface buttonProps extends React.HTMLAttributes<HTMLButtonElement>{
  /* 类名 */
  className?:string;
  /* 按钮类型 */
  type?:'normal' | 'primary' | 'dashed' | 'link';
  /* 组件之间的文字内容 */
  children?:ReactNode;
  /* 样式 */
  style?:React.CSSProperties;
  /* 点击事件 */
  onClick?:React.MouseEventHandler<HTMLButtonElement>;
  /* 失去焦点事件 */
  onBlur?:React.FocusEventHandler<HTMLButtonElement>;
  /* 得到焦点事件 */
  onFocus?:React.FocusEventHandler<HTMLButtonElement>;
  /* 按钮大小 */
  size?:'sm' | 'lg';
}

const Button = (props:buttonProps) => {
  const {onBlur,onClick,style,type = 'normal',children,size = 'medium',...others} = props;
  const cls = classNames({
    'ant-btn':true,
    [`ant-btn-${type}`]:true,
    [`ant-btn-${size}`]:true,
  })
  return <button {...others} style={style} className={cls} onClick={onClick} onBlur={onBlur}>{children}</button>;
}

export default Button;