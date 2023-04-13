import styled from "styled-components";
import { Box } from "./Box";

export const Text = styled(Box)`
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: 5px;
`

export const H1 = styled.h1`
    font-family: Bellefair;
    text-transform: uppercase;
    font-weight: 600;
    margin: 0;
    font-size: 1.7rem;
    text-align: center;
    ${({ theme }) => `
    color: ${theme.blue};`}
    width: -webkit-fill-available;
    @media screen and (max-width: ${({ theme }) => `${theme.mobile}`}) {
      font-size: 2.1rem;
    }
`
