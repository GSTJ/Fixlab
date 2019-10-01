import styled, { css } from 'styled-components';

export default styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Roboto;
    min-height: 50px;
    border-radius: 25px;
    width: 230px;
    font-size: 21px;
    font-weight: medium;
    text-transform: capitalize;
    box-shadow: none;
    cursor: pointer;
    > a {
        text-decoration: none;
    }
    ${props => props.filled && css`
        background-color: ${props.inverted ? "#ffd93b" : "#3649e2"};
        color: ${props.inverted ? "#000" : "#fff"};
    `}
    :hover {
        background-color: ${props => props.inverted ? "#e2bf34" : "#3042cc"};
    }
`;
