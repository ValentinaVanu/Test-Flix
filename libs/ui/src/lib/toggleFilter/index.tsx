import React from 'react';
import { StyledFilterMenu } from './toggleFilter'

interface ToggleFIlterProps {
  children: any,
  toggle: boolean,
  className: any
}

export const ToggleFilter = (props: ToggleFIlterProps) => {
  return <StyledFilterMenu {...props}>{props.children}</StyledFilterMenu>
};

export default ToggleFilter;
