import { styled } from "styled-components";

import brand from "../assets/icons/icon-brand-recognition.svg";
import detail from "../assets/icons/icon-detailed-records.svg";
import custom from "../assets/icons/icon-fully-customizable.svg";

const Grid = styled.div`
   margin-top: 90px;
   display: grid;
   grid-template-columns: repeat(3, 390px);
   column-gap: 35px;
   justify-content: center;

   @media(max-width: 375px){
      grid-template-columns: unset;
      grid-template-rows: repeat(3, 270px);
      row-gap: 90px;
   }
`;

const BoxWrapper = styled.div`
   position: relative;
   display: flex;
   align-items: center;
   height: 370px;

   &:nth-child(1) {
      align-items: flex-start;
      &:before, &:after {
         display: none;
      }
   }
   &:nth-child(3) {
      align-items: flex-end;
      &:before, &:after {
         display: none;
      }
   }
   &:before {
      content: '';
      position: absolute;
      left: -35px;
      top: 43%;
      display: block;
      width: 35px;
      height: 10px;
      background-color: var(--main-cyan-color);
   }
   &:after {
      content: '';
      position: absolute;
      right: -35px;
      top: 43%;
      display: block;
      width: 35px;
      height: 10px;
      background-color: var(--main-cyan-color);
   }

   @media(max-width: 375px){
      height: 270px;
      &:before {
         content: '';
         position: absolute;
         left: 50%;
         transform: translateX(-50%);
         top: -95px;
         display: block;
         width: 10px;
         height: 53px;
         background-color: var(--main-cyan-color);
      }
      &:after {
         content: '';
         position: absolute;
         left: 50%;
         transform: translateX(-50%);
         top: unset;
         bottom: -50px;
         display: block;
         width: 10px;
         height: 52px;
         background-color: var(--main-cyan-color);
      }
   }
   
`;

const InfoBox = styled.div`
   padding: 50px 30px 20px 30px;
   position: relative;
   height: 200px; // 185
   background-color: #ffff;
   :after {
      display: none;
   }

   @media(max-width: 375px) {
      padding: 50px 15px 15px 30px;
      height: 200px;
   }
`;

const BoxTitle = styled.h4`
   margin: 20px 0;
   text-align: left;
   font-size: var(--fs-title-descr);
   font-weight: 700;

   @media(max-width: 375px) {
      text-align: center;
   }
`;

const BoxDescr = styled.div`
   text-align: left;
   font-size: var(--fs-descr);
   color: var(--light-text-color);
   line-height: 25px;

   @media(max-width: 375px) {
      text-align: center;
      font-size: var(--fs-mob-descr);
   }
`;

const IconWrapper = styled.div`
   position: absolute;
   top: 0;
   transform: translateY(-50%);
   display: flex;
   justify-content: center;
   align-items: center;
   width: 90px;
   height: 90px;
   border-radius: 100%;
   background-color: var(--main-violet-color);
   
   @media(max-width: 375px) {
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
   }
`;

const Icon = styled.img`
   margin: 0 auto;
   display: block;
`;

const AdvanceDescription = () => {
   return (
      <Grid>
         <BoxWrapper>
            <InfoBox>
               <IconWrapper>
                  <Icon src={brand} alt="brand icon"/>
               </IconWrapper>
               <BoxTitle>Brand Recognition</BoxTitle>
               <BoxDescr>
                  Boost your brand recognition with each click. Generic links don`t mean a thing. Branded links help instil confidience in your content.
               </BoxDescr>
            </InfoBox>
         </BoxWrapper>
         <BoxWrapper>
            <InfoBox>
               <IconWrapper>
                  <Icon src={detail} alt="detailed icon"/>
               </IconWrapper>
               <BoxTitle>Detailed Records</BoxTitle>
               <BoxDescr>
                  Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions
               </BoxDescr>
            </InfoBox>
         </BoxWrapper>
         <BoxWrapper>
            <InfoBox>
               <IconWrapper>
                  <Icon src={custom} alt="customizable icon"/>
               </IconWrapper>
               <BoxTitle>Fully Customizable</BoxTitle>
               <BoxDescr>
                  Improve brand awarness and content discoverability through customizable links, supercharging audience engagement.
               </BoxDescr>
            </InfoBox>
         </BoxWrapper>
      </Grid>
   )
}

export {AdvanceDescription};