import { styled } from "styled-components";

import { NavBarLink } from "./NavBarLink";

const NavBarWrapper = styled.nav`
   display: flex;
   justify-content: flex-start;
   align-items: center;
   width: 35%;
   height: 100%;
`;

const NavBarLinkContainer = styled.ul`
   width: 100%;
   display: flex;
   justify-content: space-around;
   list-style-type: none;
   margin: 0;
   padding: 0;
`;

const NavBar = () => {
   return (
      <NavBarWrapper>
         <NavBarLinkContainer>
            <NavBarLink to="/features">Features</NavBarLink>
            <NavBarLink to="/pricing">Pricing</NavBarLink>
            <NavBarLink to="resources">Resources</NavBarLink>
         </NavBarLinkContainer>
      </NavBarWrapper>
   )
}

export {NavBar};