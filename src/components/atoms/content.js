import styled from 'styled-components';
import { Button, Title, Time, Link } from "components/atoms"

export default styled.div`
    display: flex;
    width: 100%;
    padding: 80px 80px 0 80px;
    max-width: 1100px;
    justify-content: space-between;
    box-sizing: border-box;
    min-height: 450px;
    @media (max-width: 735px){
        > img {
            display: none;
        }
        ${Button}, ${Link.internal}{
            width: 100%;
        }
        ${Title.h1}, ${Title.h2}, ${Time}, ${Button}{
            margin: auto;
        }
        align-items: center;
        justify-content: center;
        text-align: center;
        width: 100%;
    }
`;
