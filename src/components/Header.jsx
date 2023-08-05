import { styled } from "styled-components";
import { Link } from "react-router-dom";

import { Container } from "./Container";
import { Logo } from "./Logo";
import { NavBar } from "./NavBar";
import { NavBarLink } from "./NavBarLink";
import { CircButton } from "./CircButton";

const Grid = styled.div`
   width: 100%;
   height: 100%;
   display: grid;
   grid-template-columns: 150px 1fr 260px;
   column-gap: 10px;
   align-items: center 
`;

const HeaderWrapper = styled.header`
   margin-top: 50px;
   height: 70px;
   display: flex;
   align-items: center;
`;

const ButtonContainer = styled.div`
   width: 100%;
   height: 100%;
   display: flex;
   justify-content: space-around;
   align-items: center;
`;


const Header = () => {
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

export {Header};