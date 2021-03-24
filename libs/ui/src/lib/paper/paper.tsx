import React from 'react';
import { Paper as MaterialPaper, PaperProps } from '@material-ui/core';
import { StyledPaper } from './paper.style';

interface NewPaperProps extends PaperProps {
  theme: string
}

export const Paper = (props: NewPaperProps) => {
  return <StyledPaper {...props}>{props.children}</StyledPaper>;
};

export default Paper;
