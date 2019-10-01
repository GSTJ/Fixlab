import styled from 'styled-components';
import { Content as content, Title } from 'components/atoms';

export const Content = styled(content)`
    text-align: center;
    justify-content: center;
    flex-direction: column;
    ${Title.h2}{
        max-width: none;
    }
`;
export const Tutorial = styled.span`
    margin-bottom: 20px;
    color: #5f5f5f;
    font-weight: bold;
`
export const List = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

`