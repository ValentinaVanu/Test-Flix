import React from 'react'
import { StarIcon } from '@mono-nx-test-with-nextjs/ui';
import { StarBorderIcon } from '@mono-nx-test-with-nextjs/ui';
import { StarHalfIcon } from '@mono-nx-test-with-nextjs/ui';

import * as SS from './starBar.style'

export interface StarBarProps {
  imdbRating: string
}

export const StarBar = (props: StarBarProps) => {
  return (
    <SS.StyledStarWrapper>
      <StarBorderIcon/>
      <StarBorderIcon/>
      <StarBorderIcon/>
      <StarBorderIcon/>
      <StarBorderIcon/>
      {/* @ts-ignore */}
      <SS.StyledFilledStars imdbRating={props.imdbRating}>
        <StarIcon/>
        <StarIcon/>
        <StarIcon/>
        <StarIcon/>
        <StarIcon/>
      </SS.StyledFilledStars>
    </SS.StyledStarWrapper>
  )
}

export default StarBar
