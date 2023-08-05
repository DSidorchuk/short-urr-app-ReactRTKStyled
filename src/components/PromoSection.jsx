import { styled } from "styled-components";
import { Link } from "react-router-dom";

import { Container } from "./Container";
import { CircButton} from "./CircButton";
import image from "../assets/illustration-working.svg";

const Section = styled.section`
   overflow: hidden;
`;

const Grid = styled.div`
   display: grid;
   grid-template-columns: 600px 1fr;
   column-gap: 40px;
   position: relative;
   margin-top: 70px;
   height: 500px;
`;

const TitleBox = styled.div`
   margin-top: 55px;
`;

const Title = styled.h1`
   font-size: var(--fs-lg-title);
   font-weight: 700;
   color: var(--dark-text-color);
   text-align: start;
   margin: 0;
`;

const SubTitle = styled.span`
   display: block;
   font-size: var(--fs-lg-subtitle);
   color: var(--light-text-color);
   text-align: start;
   margin: 5px 0 35px 0;
`;


const Image = styled.img.attrs({src: image, alt: "working person"})`
   position: absolute;
   right: -240px;
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