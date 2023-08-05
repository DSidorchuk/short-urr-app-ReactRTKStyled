import { styled } from "styled-components";

import { ConvertBar } from "../feautures/ConvertBar";
import { Container } from "../components/Container";
import { UrlList } from "../feautures/UrlList";
import { AdvanceDescription } from "./AdvanceDescription";


const SectionWrapper = styled.section`
   margin-top: 150px;
   padding-top: calc((var(--input-height) * 3) / 2);
   padding-bottom: 120px;
   background-color: var(--section-bg-color);
   position: relative;
`;

const Title = styled.h2`
   text-align: center;
   padding: 0;
   margin: 0;
   margin-top: 100px;
   font-size: var(--fs-sm-title);
   font-weight: 700;
   color: var(--dark-text-color);
`;

const SubTitle = styled.span`
   display: block;
   width: 520px;
   margin: 0 auto;
   margin-top: 10px;
   text-align: center;
   color: var(--light-text-color);
   font-size: var(--fs-sm-subtitle);
   line-height: 30px;
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