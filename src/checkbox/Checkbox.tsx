import React, {
  CSSProperties,
  ReactNode,
  useRef,
  useState,
  useEffect,
  useContext,
} from "react";
import classNames from "classnames";
import "./index.scss";
import checkboxContext from "./context";
import { disabled } from '../radio/index.stories';

export interface checkboxProps extends React.HTMLAttributes<HTMLDivElement> {
  prefixCls?: string;

  /* 点击事件 */
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;

  /* 默认选中 */
  defaultChecked?: boolean;

  /* 值 */
  value?: string;

  /* 是否选中 */
  checked?: boolean;

  /* 是否禁用 */
  disabled?: boolean;
  /* 类名 */
  className?: string;
  /* 组件之间的文字内容 */
  children?: ReactNode;
  /* 样式 */
  style?: CSSProperties;
  /* 按钮大小 */
  size?: "sm" | "lg";
}

const Checkbox = (props: checkboxProps) => {
  const {
    onChange,
    defaultChecked,
    value,
    prefixCls = 'ant-',
    style,
    children,
    size = "medium",
    ...others
  } = props;

  const [checked, setChecked] = useState(defaultChecked || false);
  const {onChange:cOnchange,disabled:cdisabled,value:values} = useContext(checkboxContext);

  /* 样式 */
  const wrapperCls = classNames({
    [`${prefixCls}checkbox-wrapper`]: true,
    [`${prefixCls}checkbox-wrapper-disabled`]: props.disabled,
  });

  const cls = classNames({
    [`${prefixCls}checkbox`]: true,
    [`${prefixCls}checkbox`]: true,
    [`${prefixCls}checkbox-checked`]: checked,
    [`${prefixCls}checkbox-disabled`]: props.disabled,
  });

  useEffect(() => {
    /* 初始化如果传入的值是选定的，直接设置传入的值 */
    if ("checked" in props) {
      setChecked(props.checked || false);
    }
  }, [props.checked]);

  useEffect(() => {
    if (values && 'value' in props) {
      setChecked(values.indexOf(props.value!) > -1);
    }
  }, [values])

  const handleClick = (e: any) => {
    /* 如果是禁用的 直接取消点击事件 */
    if (props.disabled || cdisabled) return;

    /* 如果没传入checked值的话，点击就可以修改选中状态 */
    const state = !checked;

    if (!("checked" in props)) {
      setChecked(state);
    }

    /* 点击事件 */
    if (typeof onChange === "function") {
      /* 拿到真实的dom */
      e.target = inputEl.current;
      onChange(e);
    }
    if(typeof cOnchange === 'function') {
      e.target = inputEl.current;
      cOnchange(e);
    }
  };

  const inputEl = useRef(null);

  const handleChange = () => {};

  return (
    <>
      <span className={wrapperCls} onClick={handleClick}>
        <span className={cls}>
          <input
            type="checkbox"
            ref={inputEl}
            value={value}
            checked={checked}
            onChange={handleChange}
          />
          <span className="ant-checkbox-inner"></span>
        </span>
        <span>{props.children}</span>
      </span>
    </>
  );
};

export default Checkbox;
