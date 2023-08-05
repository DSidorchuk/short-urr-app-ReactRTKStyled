import { styled } from "styled-components";

import { Container } from "./Container";
import { Logo } from "./Logo";
import { FooterNav } from "./FooterNav";
import { SocialMedia } from "./SocialMedia";


const FooterWrapper = styled.footer`
   background-color: var(--footer-bg-color);
   min-height: 260px;
   padding-top: 70px;
`;

const FooterGrid = styled.div`
   display: grid;
   grid-template-columns: 340px 540px 200px;
   column-gap: 80px;
`;


const Footer = () => {
   return (
      <FooterWrapper>
         <Container>
            <FooterGrid>
               <Logo light={true} position={'flex-start'}/>
               <FooterNav/>
               <SocialMedia/>
            </FooterGrid>
         </Container>
      </FooterWrapper>
   )
}

export {Footer};