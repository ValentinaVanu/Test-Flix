import styled from 'styled-components';
import { Grid as MaterialGrid} from '@material-ui/core';


export const StyledGrid = styled(MaterialGrid)`
  align-items: center;
  align-self: start;
  justify-content: center;
  display: ${({ toggle }) => toggle ? 'none' : 'grid'};
  grid-column: 1/-1;
  grid-row: 1/2;
  grid-template-rows: auto;

  @media screen and (min-width: 768px) {
    grid-row: 2/auto;
    grid-column: 1/-1;
    grid-template-columns: repeat(auto-fit, 200px);
    grid-gap: 40px;
    justify-content: start;
  }

  @media screen and (min-width: 1024px) {
    grid-column: 2/-1;
  }
`
