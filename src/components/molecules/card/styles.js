import styled from 'styled-components';
import Img from "gatsby-image/withIEPolyfill"

export const Container = styled.div`
    display: flex;
    text-decoration: none;
    border: 1px solid gray;
    margin-bottom: 30px;
    overflow: hidden;
    max-width: 800px;   
    justify-content: center;
    flex-wrap: wrap;
`;

export const Content = styled.div`
    margin: 20px;
`

export const Date = styled.div`
    position: relative;
    top: -1em;
    color: #595959;
`;

export const Image = styled(Img)`
    width: 100%;
    height: 300px;
`