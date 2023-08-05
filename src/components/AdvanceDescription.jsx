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
`;

const BoxWrapper = styled.div`
   height: 370px; //340px
   display: flex;
   align-items: center;
   position: relative;

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
      display: block;
      width: 35px;
      height: 10px;
      background-color: var(--main-cyan-color);
      position: absolute;
      left: -35px;
      top: 43%;
   }
   &:after {
      content: '';
      display: block;
      width: 35px;
      height: 10px;
      background-color: var(--main-cyan-color);
      position: absolute;
      right: -35px;
      top: 43%;
   }
`;

const InfoBox = styled.div`
   position: relative;
   height: 200px; // 185
   padding: 50px 30px 20px 30px;
   background-color: #ffff;
   :after {
      display: none;
   }
`;

const BoxTitle = styled.h4`
   margin: 20px 0;
   text-align: left;
   font-weight: 700;
   font-size: var(--fs-title-descr);
`;

const BoxDescr = styled.div`
   text-align: left;
   font-size: var(--fs-descr);
   color: var(--light-text-color);
   line-height: 25px;
`;

const IconWrapper = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   position: absolute;
   top: 0;
   transform: translateY(-50%);
   width: 90px;
   height: 90px;
   background-color: var(--main-violet-color);
   border-radius: 100%;
`;

const Icon = styled.img`
   display: block;
   margin: 0 auto;
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