import styled from 'styled-components';

export const StyledMainGrid = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-gap: 40px;
  padding-top: 65px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 0px;
    padding-bottom: none;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(5, 1fr);
  }
`
