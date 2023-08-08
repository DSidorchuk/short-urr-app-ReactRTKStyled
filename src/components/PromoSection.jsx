import { styled } from "styled-components";
import { Link } from "react-router-dom";

import { Container } from "./Container";
import { CircButton} from "./CircButton";
import image from "../assets/illustration-working.svg";

const Section = styled.section`
   overflow: hidden;
`;

const Grid = styled.div`
   margin-top: 70px;
   position: relative;
   display: grid;
   grid-template-columns: 600px 1fr;
   column-gap: 40px;
   height: 500px;

   @media(max-width: 375px) {
      margin-top: 30px;
      grid-template-columns: none;
      grid-template-rows: 320px 300px;
      width: 100%;
      height: auto;
   }
`;

const TitleBox = styled.div`
   margin-top: 55px;
   @media(max-width: 375px) {
      margin-top: 35px;
      display: flex;
      flex-direction: column;
      align-items: center;
      grid-row: 2;
   }
`;

const Title = styled.h1`
   margin: 0;
   text-align: start;
   font-size: var(--fs-lg-title);
   font-weight: 700;
   color: var(--dark-text-color);

   @media(max-width: 375px) {
      text-align: center;
      font-size: var(--fs-mob-lg-title);
   }
`;

const SubTitle = styled.span`
   margin: 5px 0 35px 0;
   display: block;
   text-align: start;
   font-size: var(--fs-lg-subtitle);
   color: var(--light-text-color);

   @media(max-width: 375px) {
      margin: 15px 0 25px 0;
      text-align: center;
      font-size: var(--fs-mob-lg-subtitle);
      line-height: 25px;
   }
`;


const Image = styled.img.attrs({src: image, alt: "working person"})`
   position: absolute;
   right: -240px;

   @media(max-width: 375px) {
      top: -95px;
      right: -287px;
      z-index: 0;
      display: block;
      transform: scale(0.67);
   }
`

const PromoSection = () => {
   return (
      <Section>
         <Container>
            <Grid>
               <TitleBox>
                  <Title>More than just shorter links</Title>
                  <SubTitle>
                     Build your brand's recognition and get detailed insights on how your links are performing.
                  </SubTitle>
                  <CircButton>
                     <Link to='/start'> Get Started</Link>
                  </CircButton>
               </TitleBox>
               <Image/>
            </Grid>
         </Container>
      </Section>
   )
}

export {PromoSection};