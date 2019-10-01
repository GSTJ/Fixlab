import styled, { css } from 'styled-components';

export const h1 = styled.h1`
    font-size: 40px;
    font-weight: bold;
    margin: 0;
    ${props => props.inverted && css`
        color: #fff;
    `}
    > span {
        color:  ${props => props.inverted ? "#ffd93b" : "#3649e2"};
    }
`;

export const h2 = h1.withComponent("h2")

export default { h1, h2 }