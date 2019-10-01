import styled from 'styled-components';
import { Button } from "components/atoms"

export const Figure = styled.figure`
    display: flex;
    align-items: center;
    width: 350px;
    justify-content: center;
    @media (max-width: 1000px) {
        justify-content: left;
    }
`

export const Footer = styled.div`
    position: sticky;
    display: flex;
    color: #fff;
    padding: 20px;
    min-height: 200px;
    background-color: #3649e2;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    ${Button}{
        margin: 15px;
    }
`;

export const Caption = styled.figcaption`
    margin-left: 15px;
`