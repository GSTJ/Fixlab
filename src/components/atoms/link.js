import styled from 'styled-components';
import { Link } from "gatsby"

export const internal = styled(Link)`
  text-decoration: none;
  color: unset;
  width: min-content;
`;

export const external = internal.withComponent("a")