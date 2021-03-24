import styled from 'styled-components'
import { Paper as MaterialPaper } from '@material-ui/core';

const colorSet = {
  True_False: "#ED6606",
  True_True: "#049452",
  False_False: "#fff",
  False_True: "#EEC907",
}

export const StyledPaper = styled(MaterialPaper)`
  && {
    display: flex;
    margin: 2rem 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => colorSet[theme]};
    border-radius: 20px;
    height: 300px;
    width: 200px;
  }
`
