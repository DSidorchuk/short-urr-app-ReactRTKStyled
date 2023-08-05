import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const NavBarLink = styled(Link)`
   display: flex;
   align-items: center;
   font-size: var(--fs-link);
   color: var(--light-text-color);
   text-decoration: none;
   font-weight: 700;
   &:hover {
      color: var(--dark-text-color);
   }
`;