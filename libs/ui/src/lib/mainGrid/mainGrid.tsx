import React from 'react';
import { StyledMainGrid } from './mainGrid.style';

interface MainGridProps {
  children: any
}

export const MainGrid = (props: MainGridProps) => (
  <StyledMainGrid>{props.children}</StyledMainGrid>
);

export default MainGrid;
