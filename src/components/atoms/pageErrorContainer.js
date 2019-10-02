import styled from 'styled-components';
import { Title } from "components/atoms"

export default styled.div`
    max-height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 100px 15px 100px 15px;
    ${Title.h1}{
      font-size: 25px;
    }
`;
