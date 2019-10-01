import styled from 'styled-components';
import { Link } from "components/atoms"

export default styled.div`
  display: flex;
  justify-content: space-between;
  ${Link.internal}{
      width: max-content;
  }
`;
