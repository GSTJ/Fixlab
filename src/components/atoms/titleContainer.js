import styled from 'styled-components';
import { Title } from "components/atoms"

export default styled.div`
    background-size: 800px auto;
    background-color: #3c3ac0;
    width: 100%;
    padding: 30px;
    box-sizing: border-box;
    box-shadow: 0 0 5px 0 #000;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    ${Title.h1}{
        max-width: 1000px;
        font-size: 30px;
        color: white;
    }
`;
