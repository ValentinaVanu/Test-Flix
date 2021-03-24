import styled from 'styled-components';

export const StyledArrowDown = styled.div`
  position: absolute;
  top: 168px;
  left: -24px;

  &::after {
    content: '';
    width: 0; 
    height: 40px;
    border-left: 200px solid transparent;
    border-right: 200px solid transparent;
    border-top: 40px solid #455a64;
    margin-top: 1px;
  }
  &::before {
    content: 'OPEN FILTERS';
    color: #fff;
    width: 100%;
    text-align: center;
    position: absolute;
    top: -30px;

  }

  @media screen and (min-width: 786px) {
    display: none;
  }
`
