import React from 'react'
import { StyledImage } from './image.style'

interface ImageProps {
  imagePath: string,
  onLoad: any,
  onError: any,
}


export const Image = (props: ImageProps) => {
  // @ts-ignore
  return <StyledImage onError={props.onError} onLoad={props.onLoad} src={props.imagePath} path={props.imagePath}/>
}

export default Image;
