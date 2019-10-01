import styled from 'styled-components';
import { Title, Link, Description } from "components/atoms"

export default styled.div`
    display: flex;
    flex-direction: column;
    ${Title.h2}{
        max-width: 400px;
    }
    ${Title.h2}, ${Description}, ${Link.internal}{
        margin-left: auto;
    }
    ${Link.internal}{
        margin-top: 20px;
    }
`