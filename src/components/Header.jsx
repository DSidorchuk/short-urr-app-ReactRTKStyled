import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";

import { Container } from "./Container";
import { Logo } from "./Logo";
import { NavBar } from "./NavBar";
import { NavBarLink } from "./NavBarLink";
import { CircButton } from "./CircButton";
import { Burger } from "./Burger";
import { MobileMenu } from "./MobileMenu";

const HeaderWrapper = styled.header`
   margin-top: 50px;
   display: flex;
   align-items: center;
   height: 70px;

   @media (max-width: 375px) {
      margin-top: 20px;
    }
`;

const Grid = styled.div`
   display: grid;
   grid-template-columns: 150px 1fr 260px;
   column-gap: 10px;
   align-items: center; 
   width: 100%;
   height: 100%;

   @media (max-width: 375px) {
      display: flex;
      justify-content: space-between;
   }
`;

const ButtonContainer = styled.div`
   display: flex;
   justify-content: space-around;
   align-items: center;
   width: 100%;
   height: 100%;
`;



const DesktopHeader = () => {
   return (
      <HeaderWrapper>
         <Container>
            <Grid>
               <Logo/>
               <NavBar/>
               <ButtonContainer>
                  <NavBarLink to="/login">Login</NavBarLink>
                  <CircButton size="sm">
                     <Link to="/signup">Sign Up</Link>
                  </CircButton>
               </ButtonContainer>
            </Grid>
         </Container>
      </HeaderWrapper>
   )
}

const MobileHeader = () => {

   const [active, setActive] = useState(false);

   const toggleActive = () => {
      setActive(active => !active);
   }

   return (
      <HeaderWrapper>
         <Container>
            <Grid>
               <Logo/>
               <Burger onClick={toggleActive}/>
            </Grid>
            <MobileMenu active={active}/>
         </Container>
      </HeaderWrapper>
   )
}


const Header = () => {

   const isDesktop = useMediaQuery({minWidth: 1200});
   const isMobile = useMediaQuery({maxWidth: 375});


   return (
      <>
         {isDesktop && <DesktopHeader/>}
         {isMobile && <MobileHeader/>}
      </>
   )
}

export {Header};