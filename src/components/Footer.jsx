import { styled } from "styled-components";

import { Container } from "./Container";
import { Logo } from "./Logo";
import { FooterNav } from "./FooterNav";
import { SocialMedia } from "./SocialMedia";


const FooterWrapper = styled.footer`
   padding-top: 70px;
   min-height: 260px;
   background-color: var(--footer-bg-color);

   @media(max-width: 375px){
      padding-top: 50px;
   }
`;

const FooterGrid = styled.div`
   display: grid;
   grid-template-columns: 340px 540px 200px;
   column-gap: 80px;

   @media(max-width: 375px){
      grid-template-columns: unset;
      grid-template-rows: 50px 485px 60px;
      row-gap: 40px;
   }
`;


const Footer = () => {
   return (
      <FooterWrapper>
         <Container>
            <FooterGrid>
               <Logo 
                  light={true} 
                  yPos={'flex-start'}
                  xPos={'center'}
               />
               <FooterNav/>
               <SocialMedia/>
            </FooterGrid>
         </Container>
      </FooterWrapper>
   )
}

export {Footer};