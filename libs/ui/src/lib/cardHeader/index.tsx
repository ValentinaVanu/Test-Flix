import React from 'react'
import { StyledCardHeader } from './cardHeader.style'
import { FavoriteBorderIcon } from '@mono-nx-test-with-nextjs/ui';
import { FavoriteIcon } from '@mono-nx-test-with-nextjs/ui';
import { VisibilityOffIcon } from '@mono-nx-test-with-nextjs/ui';
import { VisibilityIcon } from '@mono-nx-test-with-nextjs/ui';


interface CardHeaderProps {
  saved: string,
  watched: string,
  imdbID: string,
  handleClick: any
}

export const CardHeader = (props: CardHeaderProps) => {

  return (
    <StyledCardHeader {...props}>
      {props.saved === 'True' && <FavoriteIcon onClick={() => props.handleClick('Saved', props.imdbID)} />}
      {props.saved === 'False' && <FavoriteBorderIcon onClick={() => props.handleClick('Saved', props.imdbID)} />}
      {props.watched === 'True' && <VisibilityOffIcon onClick={() => props.handleClick('Watched', props.imdbID)} />}
      {props.watched === 'False' && <VisibilityIcon onClick={() => props.handleClick('Watched', props.imdbID)} />}
    </StyledCardHeader>)
}

export default CardHeader
