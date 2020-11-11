import React from 'react';

import { Select } from './styled';

interface FormSelectProps {
  options?: Array<string>;
  defaultName?: string;
}

const FormSelect: React.FC<FormSelectProps> = ({ options, defaultName }) => {
  return (
    <Select>
      <option value={defaultName}> {defaultName} </option>
      {options?.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </Select>
  );
};

export default FormSelect;
