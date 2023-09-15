import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Links = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  border-radius: 4px;
  color: #2a363b;

  &.active {
    color: #fff;
    background-color: #d1a5c1;
  }
`;
