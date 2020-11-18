import React from 'react';
import FormSelect from '../FormSelect';

interface FormSelectProps {
  options?: Array<string>;
  defaultName?: string;
  onChange?: () => void;
  filterRef?: () => void;
}

const Filter: React.FC<FormSelectProps> = ({
  options,
  defaultName,
  onChange,
  filterRef,
}) => {
  return (
    <FormSelect
      filterRef={filterRef}
      defaultName={defaultName}
      onChange={onChange}
      options={options}
    />
  );
};

export default Filter;
