import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const NavBarLink = styled(Link)`
   display: flex;
   align-items: center;
   text-decoration: none;
   font-size: var(--fs-link);
   font-weight: 700;
   color: var(--light-text-color);

   &:hover {
      color: var(--dark-text-color);
   }

   @media (max-width: 375px) {
      color: #ffff;
   }
`;