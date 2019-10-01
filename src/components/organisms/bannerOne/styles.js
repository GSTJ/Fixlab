import styled from 'styled-components';
import { Title } from "components/atoms"

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  box-sizing: border-box;
  ${Title.h1} {
      max-width: 400px;
  }
`;

export const Image = styled.div`
    width: 210px;
    margin-left: 20px;
    justify-content: flex-end;
`;
