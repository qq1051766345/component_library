import InternalCheckbox from './Checkbox'
import Group from './CheckboxGroup'


type CheckBoxType = typeof InternalCheckbox;


interface CheckboxInterface extends CheckBoxType {
  Group: typeof Group;
}

const Checkbox = InternalCheckbox as CheckboxInterface;

Checkbox.Group = Group;

export default Checkbox;