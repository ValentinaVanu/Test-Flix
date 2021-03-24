import React from 'react'
import { StyledArrowDown } from './arrowDown.style';

interface ArrowPRops {
  onClick: any
}

export const ArrowDown = (props: ArrowPRops) => {
  return <StyledArrowDown {...props} />
};

export default ArrowDown;
