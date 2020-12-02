// @ts-nocheck
import React from 'react';

import { Select } from './styled';

interface FormSelectProps {
  options?: Array<string>;
  defaultName?: string;
  onChange?: () => void;
  filterRef?: () => void;
}

const FormSelect: React.FC<FormSelectProps> = ({
  options,
  defaultName,
  onChange,
  filterRef,
}) => {
  return (
    <Select onChange={onChange} ref={filterRef}>
      <option key="unique" value="">
        {defaultName}
      </option>
      {options?.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </Select>
  );
};

export default FormSelect;
