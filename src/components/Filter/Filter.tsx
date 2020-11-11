import React from 'react';
import FormSelect from '../FormSelect';

import { FilterContainer } from './styled';

interface FormSelectProps {
  options?: Array<string>;
  defaultName?: string;
}

const Filter: React.FC<FormSelectProps> = ({ options, defaultName }) => {
  return <FormSelect defaultName={defaultName} options={options} />;
};

export default Filter;
