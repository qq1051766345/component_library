import React, { CSSProperties,ReactNode } from "react";
import classNames from "classnames";
import './index.scss'

export interface inputProps extends React.HTMLAttributes<HTMLDivElement>{
  /* 类名 */
  className?:string;
  /* 按钮类型 */
  type?:'normal' | 'primary' | 'dashed' | 'link';
  /* 组件之间的文字内容 */
  children?:ReactNode;
  /* 样式 */
  style?:CSSProperties;
  /* 按钮大小 */
  size?:'sm' | 'lg';
}

const Input = (props:inputProps) => {
  const {style,type = 'normal',children,size = 'medium',...others} = props;
  const cls = classNames({
    'ant-btn':true,
    [`ant-btn-${type}`]:true,
    [`ant-btn-${size}`]:true,
  })
  return <Input {...others} style={style} className={cls}>{children}</Input>;
}

export default Input;