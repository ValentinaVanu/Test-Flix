import styled from 'styled-components'

export const StyledStarWrapper = styled.div`
  position: relative;
`

export const StyledFilledStars = styled.div`
  position: absolute;
  display: flex;
  left: 0;
  width: ${({ imdbRating }) => +imdbRating * 10 }%;
  top: 0;
  overflow: hidden;
  height: 20px;
`
