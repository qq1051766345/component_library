import InternalRadio from './Radio'
import RadioGroup from './RadioGroup';

type radioType = typeof InternalRadio;
/* 扩展radioType */
interface radioInterface extends radioType {
  Group: typeof RadioGroup;
}

const Radio = InternalRadio as radioInterface;

Radio.Group = RadioGroup;

export default Radio;