import styled from 'styled-components';

export const StyledFilterMenu = styled.div`
  @media screen and (max-width: 786px) {
    display: ${({ toggle }) => toggle ? 'block' : 'none'}
  }
`
