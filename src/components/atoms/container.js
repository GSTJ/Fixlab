import styled, { css } from 'styled-components';
export default styled.div`
    justify-content: center;
    display: flex;
    min-height: 500px;
    @media (max-width: 735px){
        min-height: calc(100vh - 75px);
    }
`;
