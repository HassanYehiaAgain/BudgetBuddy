import styled from "styled-components";
import { device } from "./devices";

export const InputStyled = styled.input`
  background-color : #E74646;
  grid-column: 2 / 2;
  grid-row: ${(props) => props.rows};
  font-family: 'Roboto Mono';
  width: 80%;
  height: 55%;
  border: none;
  padding: 3%;
  border-radius: 0.8rem;
  color: #FFF3E2;

  &:focus{
        display: inline-block;
        box-shadow : 0 0 0 0.2rem  #7D2E68;
        border-radius: 0.4rem;
    }

    &::placeholder{
        color: #fff3e2a0;
    }

    @media ${device.laptop} { 
        width: 80%;
        height: 5%;
  }
`