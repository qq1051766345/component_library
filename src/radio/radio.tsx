/*
 * @Author: “邓浩” “1051766345@qq.com”
 * @Date: 2023-04-24 20:59:41
 * @LastEditors: “邓浩” “1051766345@qq.com”
 * @LastEditTime: 2023-05-03 16:56:45
 * @FilePath: /my-app/src/radio/radio.tsx
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import React, { CSSProperties,ReactNode, useState,useRef, useEffect } from "react";
import classNames from "classnames";
import './index.scss'

export interface radioProps extends React.HTMLAttributes<HTMLInputElement>{
  /* 类名 */
  className?:string;
  /* 组件之间的文字内容 */
  children?:ReactNode;
  /* 样式 */
  style?:CSSProperties;
  checked?:boolean;
  defaultChecked?:boolean;
  disabled?:boolean;
  onChange?:(e:React.FormEvent<HTMLInputElement>) => void;
}


const Radio = (props:radioProps) => {

  const [checked,setChecked] = useState<boolean>(false);
  const inputEL:React.RefObject<HTMLInputElement> = useRef(null);
  const {style,children,onChange,disabled,...others} = props;
  const cls = classNames({
    'ant-radio':true,
    'ant-radio-checked':checked,
    'ant-radio-disabled':disabled
  })
  const wrapperCls = classNames({
    'ant-radio-wrapper':true,
    'ant-radio-wrapper-disabled':disabled
  })

  useEffect(() => {
    if('checked' in props && props.checked !== checked){
      setChecked(props.checked!);
    }
  },[props.checked])

  const clickHandler = (e:any) => {
    if (checked || disabled) {
      return;
    }
    
    if(!('checked' in props)){
      setChecked(true);
    }
    
    setChecked(true);
    /* 点击事件 */
    if(typeof onChange === 'function'){
      e.target = inputEL.current;
      onChange(e);
    }
  }

  return <>
    <span className={wrapperCls} onClick={clickHandler}>
      <span className={cls}>
        <input type="radio" className="ant-radio-input" ref={inputEL}/>
        <span className="ant-radio-inner"></span>
      </span>
      <span>{children}</span>
    </span>
  </>;
}

export default Radio;