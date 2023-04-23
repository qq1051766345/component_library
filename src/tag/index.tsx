import React, { ReactNode, useState } from "react";
import classNames from "classnames";
import Icon from "../icon/index";
import "./index.scss";

interface tagProps {
  /* 类名 */
  className?: string;
  /* 按钮类型 */
  closeable?: boolean;
  color?: string;
  visible?: boolean;
  onClose?: Function;
  children?: any;
  style?:React.CSSProperties;
}

const Tag = (props: tagProps) => {
  const {
    closeable,
    className,
    children,
    color,
    onClose,
    ...others
  } = props;

  const [visible, setVisible] = useState<boolean>(true);

  React.useEffect(() => {
    if('visible' in props && (typeof props.visible !== 'undefined')){
      setVisible(props.visible);
    }
  },[props.visible])

  const customColor = color && color.match(/^#/);
  const style:React.CSSProperties  = {
    ...props.style,
  }
  if(customColor){
    style.backgroundColor = color;
  }
  const cls = classNames({
    "ant-tag": true,
    [className as string]: !!className,
    /* 有颜色且不是以#开头 */
    [`ant-tag-${color}`]: color && !customColor,
  });
  
  const handleClick = (e:React.MouseEvent<HTMLElement>) => {
    onClose?.(e)
    if(e.defaultPrevented){
      /* 如果默认事件被阻止了 */
      return ;
    }
    if(!('visible' in props)){
      /* 如果visible不在就可以关掉 */
      setVisible(false);
    }
  };

  if (!visible) {
    return null;
  }

  return (
    <span className={cls} style={style}>
      {children}
      {closeable || onClose ? (
        <Icon
          type="close"
          size={10}
          style={{ verticalAlign: "middle", marginLeft: "3px" }}
          onClick={handleClick}
        />
      ) : null}
    </span>
  );
};

export default Tag;
