import React, {
  CSSProperties,
  ReactNode,
  useState,
  useEffect,
  Children
} from "react";
import classNames from "classnames";
import "./index.scss";
import Radio from "./radio";

export interface radioProps extends React.HTMLAttributes<HTMLInputElement> {
  value?: string;
  defaultValue?: string;
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
  /* 类名 */
  className?: string;
  /* 组件之间的文字内容 */
  children?: ReactNode;
  /* 样式 */
  style?: CSSProperties;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
}


const RadioGroup = (props: radioProps) => { 
  const [checked, setChecked] = useState<boolean>(false);
  const { style, children, onChange, disabled, ...others } = props;
  const [value, setValue] = useState<string>(props.defaultValue! || props.value!);
  const cls = classNames({
    "ant-radio": true,
    "ant-radio-checked": checked,
    "ant-radio-disabled": disabled,
  });


  const handleClick = (e:any) => {
    const value = e.target.value;
    setValue(value);
  }

  const newChildren = Children.map(children, (child:any) => {
    if(child.type !== Radio) return;
    return React.cloneElement(child as React.ReactElement<any>, {
      checked: child.props.value === value,
      disabled: disabled,
      onChange: handleClick
    });
  });

  return (
    <>
      <span className={cls}>
        <span>{newChildren}</span>
      </span>
    </>
  );
};

export default RadioGroup;
