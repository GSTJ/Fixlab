import styled, { css } from 'styled-components';

export default styled.div`
    font-size: 22px;
    max-width: 450px;
    margin: 20px 0 0 0;
    ${props => props.inverted && css`
        color: white;
    `}
`;
