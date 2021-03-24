import styled from 'styled-components'

export const StyledImage = styled.img`
  background-image: url(${({path}) => path});
  background-size: cover;
  background-position: center center;
  height: 221px;
  width: 150px;
  border-radius: 10px;
`
