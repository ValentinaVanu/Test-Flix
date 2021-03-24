import { Divider } from '@material-ui/core';
import React from 'react';
import { StyledFilterBody } from './filterBody.style';

interface FilterBodyProps {
  children: any,
  mobile: boolean,
}

export const FilterBody = (props: FilterBodyProps) => {
  return <StyledFilterBody {...props}>{props.children}</StyledFilterBody>
};

export default FilterBody
