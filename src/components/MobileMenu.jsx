import { styled } from "styled-components";
import { Link } from "react-router-dom";

import { NavBarLink } from "./NavBarLink";


const MenuWrapper = styled.div`
   padding: 30px 25px;
   position: absolute;
   z-index: 1;
   display: ${(props) => props.active ? 'block' : 'none'};
   width: 275px;
   border-radius: var(--rect-radii);
   background-color: var(--main-violet-color);
`;

const LinksWrapper = styled.nav`
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   align-items: center;
   height: 200px;

   &: after {
      content: '';
      display: block;
      width: 100%;
      height: 1px;
      background-color: var(--burger-bg-color);
      opacity: 0.3;
   }
`;

const ButtonsWrapper = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   align-items: center;
   height: 120px;
`;

const Button = styled.button`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;
   height: 48px;
   border: none;
   border-radius: var(--radii);
   font-size: var(--fs-lg-btn);
   background-color: var(--main-cyan-color);

   & > a {
      text-decoration: none;
      font-weight: 700;
      color: #ffff;
   }
   &: hover {
      background-color: var(--btn-cyan-hover-color);
   }
`;

const MobileMenu = ({active}) => {
   return (
      <MenuWrapper active={active}>
         <LinksWrapper>
            <NavBarLink to="/features">Features</NavBarLink>
            <NavBarLink to="/pricing">Pricing</NavBarLink>
            <NavBarLink to="resources">Resources</NavBarLink>
         </LinksWrapper>
         <ButtonsWrapper>
            <NavBarLink to="/login">Login</NavBarLink>
            <Button>
               <Link to="/signup">Sign Up</Link>
            </Button>
         </ButtonsWrapper>
      </MenuWrapper>
   )
}

export {MobileMenu}