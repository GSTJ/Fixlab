import styled from 'styled-components';
import { Title, Description } from "components/atoms"

export default styled.div`
  margin-top: 70px;
  max-width: 1000px;
  margin: 30px;
  ${Description}, ${Title.h1}{
    max-width: unset;
  }
  ${Title.h1}{
    font-size: 35px;
    text-align: center;
    margin: auto;
  }
  iframe{
    max-width: 100%;
    height: auto;
  }
  img{
    max-width: 100%;
    height: auto;
  }
`;
