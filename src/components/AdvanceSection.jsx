import { styled } from "styled-components";

import { ConvertBar } from "../feautures/ConvertBar";
import { Container } from "../components/Container";
import { UrlList } from "../feautures/UrlList";
import { AdvanceDescription } from "./AdvanceDescription";


const SectionWrapper = styled.section`
   margin-top: 150px;
   padding-top: calc((var(--input-height) * 3) / 2);
   padding-bottom: 120px;
   position: relative;
   background-color: var(--section-bg-color);

   @media(max-width: 375px){
      padding-bottom: 80px;
   }
`;

const Title = styled.h2`
   margin: 0;
   margin-top: 100px;
   padding: 0;
   font-size: var(--fs-sm-title);
   font-weight: 700;
   text-align: center;
   color: var(--dark-text-color);

   @media(max-width: 375px){
      font-size: var(--fs-mob-sm-title);
   }
`;

const SubTitle = styled.span`
   margin: 0 auto;
   margin-top: 10px;
   display: block;
   width: 520px;
   text-align: center;
   font-size: var(--fs-sm-subtitle);
   line-height: 30px;
   color: var(--light-text-color);

   @media(max-width: 375px){
      width: 320px;
      font-size: var(--fs-mob-sm-subtitle);
   }
`;


const AdvanceSection = () => {
   return (
      <SectionWrapper>
         <Container>
            <ConvertBar/>
            <UrlList/>
            <Title>Advanced Statistics</Title>
            <SubTitle>Track how your links are performing across the web with our advanced statistics dashboard.
            </SubTitle>
            <AdvanceDescription/>
         </Container>
      </SectionWrapper>
   )
}

export {AdvanceSection};