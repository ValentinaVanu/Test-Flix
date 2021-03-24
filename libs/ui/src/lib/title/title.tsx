import React from 'react';
import { StyledTitle } from './title.style';

interface TitleProps {
  children: any
}

export const Title = (props: TitleProps) => (
  <StyledTitle>{props.children}</StyledTitle>
);

export default Title;
