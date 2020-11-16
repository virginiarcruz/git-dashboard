import React from 'react';

import { Select } from './styled';

interface FormSelectProps {
  options?: Array<string>;
  defaultName?: string;
  onChange?: () => void;
  filterRef?: () => void | any;
}

const FormSelect: React.FC<FormSelectProps> = ({
  options,
  defaultName,
  onChange,
  filterRef,
}) => {
  return (
    <Select onChange={onChange} ref={filterRef}>
      <option value=""> {defaultName} </option>
      {options?.map(option => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </Select>
  );
};

export default FormSelect;
