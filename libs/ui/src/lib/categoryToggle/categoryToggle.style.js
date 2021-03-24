import styled from 'styled-components';
import { Button } from '@material-ui/core';

export const StyledCategory = styled(Button)`
  && {
    color: black;
    background-color: #fff;
    width: 90%;
    margin: 20px;
    cursor: pointer;

    & > span {
      pointer-events: none;
    }

    :hover {
      color: black;
      background-color: #fff;
    }
  
    @media screen and (min-width: 786px) {
      display: none;
    }
  }
`
