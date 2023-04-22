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
  onClose?: boolean;
  children?: string;
  style?:React.CSSProperties;
}

const Tag = (props: tagProps) => {
  const {
    closeable,
    className,
    children,
    color,
    visible: pvisible,
    ...others
  } = props;
  const [visible, setVisible] = useState<boolean>(pvisible || true);

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
  
  const handleClick = () => {
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <span className={cls} style={style}>
      {children}
      {closeable ? (
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
