import React from 'react';
import { Grid as MaterialGrid, GridProps } from '@material-ui/core';
import { StyledGrid } from './grid.style';

interface GridProps {
  toggle: boolean,
  children: any,
}

export const Grid = (props: GridProps) => (
  <StyledGrid {...props}>{props.children}</StyledGrid>
);

export default Grid;
