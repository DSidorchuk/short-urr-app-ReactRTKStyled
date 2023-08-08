import { styled } from "styled-components";
import { Link } from "react-router-dom";

import bgImage from "../assets/bg-boost-desktop.svg";
import bgMobImage from "../assets/bg-boost-mobile.svg"
import { Container } from "./Container";
import { CircButton} from "./CircButton";

const SectionWrapper = styled.section`
   padding-top: 1px;
   height: 250px;
   background: var(--main-violet-color) url(${bgImage}) center / 100%;

   @media(max-width: 375px) {
      padding-top: 30px;
      height: 270px;
      background: var(--main-violet-color) url(${bgMobImage}) center / 100%;
   }
`;

const Title = styled.h2`
   margin: 0;
   margin-top: 70px;
   padding: 0;
   text-align: center;
   font-weight: 700;
   font-size: var(--fs-sm-title);
   color: #ffff;

   @media(max-width: 375px) {
      font-size: var(--fs-mob-boost-title);
   }
`;

const ButtonWrapper = styled.div`
   margin-top: 30px;
   display: flex;
   justify-content: center;
`;

const BoostSection = () => {
   return (
      <SectionWrapper>
         <Container>
            <Title>Boost your links today</Title>
            <ButtonWrapper>
               <CircButton>
                  <Link to='/start'> Get Started</Link>
               </CircButton>
            </ButtonWrapper>
         </Container>
      </SectionWrapper>
   )
}

export {BoostSection};