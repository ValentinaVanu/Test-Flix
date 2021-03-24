import styled from 'styled-components';

export const StyledFilterBody = styled.div`
  display: ${({ mobile }) => mobile ? 'block' : 'none'};

  @media screen and (min-width: 768px){
    display: block
  }
`
