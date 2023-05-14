import React, {
  CSSProperties,
  ReactNode,
  useRef,
  useState,
  useEffect,
  Children,
} from "react";
import classNames from "classnames";
import "./index.scss";
import { disabled, checked } from '../radio/index.stories';
import checkboxContext from "./context";
import Checkbox from ".";
export interface checkboxGroupProps {
  /**
   * 默认数值
   */
  defaultValue?: Array<string>;
  /**
   * 数值
   */
  value?: Array<string>;
  onChange?: Function;
  /**
   * 是否禁用
   */
  disabled?: boolean;
  /**
   * 回调事件
   */
  className?: string;
  children?: React.ReactNode;
  style?: object;
}

const CheckboxGroup = (props: checkboxGroupProps) => {
  const { disabled = false, children, onChange, ...others } = props;

  const [value, setValue] = useState(props.defaultValue || props.value || []);

  /* 样式 */
  const cls = classNames({
    "ant-checkbox-group": true,
  });

  const changeHandle = (e:any) => {
    const targetValue = e.target.value;
    const index = value.indexOf(targetValue);
    const checked = e.target.checked;

    if(index === -1 && !checked) {
      /* 此时 */
    }
  };

  return (
    <>
      <span className={cls}>
        <checkboxContext.Provider
          value={{
            onChange: changeHandle,
            value,
            disabled
          }}
        >
          {children}
        </checkboxContext.Provider>
      </span>
    </>
  );
};

export default CheckboxGroup;
