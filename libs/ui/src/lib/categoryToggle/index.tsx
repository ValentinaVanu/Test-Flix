import React from 'react';
import * as SC from './categoryToggle.style'

interface CategoryProps {
  children: any,
  onClick: any,
  name: string
  
}

export const CategoryToggle = (props: CategoryProps) => {
  return(
    <SC.StyledCategory name={props.name} onClick={props.onClick}>{props.children}</SC.StyledCategory>
  )
}

export default CategoryToggle;
