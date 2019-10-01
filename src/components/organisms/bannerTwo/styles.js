import styled from 'styled-components';
import background from "images/background.jpg"
import { Container as container } from "components/atoms"

export const Container = styled(container)`
    text-align: right;
    background-color: #3649e2;
    background-image: url(${background});
`;

export const Image = styled.div`
    width: 664px;
    height: 400px;
    margin:  0 80px 30px -350px;
`;
