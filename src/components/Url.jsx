import { styled } from "styled-components";
import { useMediaQuery } from "react-responsive";

import { CopyButton } from "../components/CopyButton";
import { FullUrl } from "../components/FullUrl";
import { ShortUrl } from "../components/ShortUrl";


const UrlWrapper = styled.div`
   padding: 0 30px;
   display: grid;
   grid-template-columns: 650px 360px 140px;
   column-gap: 15px;
   border-radius: 5px;
   background-color: #ffff;

   @media (max-width: 375px){
      padding: 5px 17px 17px 17px;
      position: relative;
      grid-template-columns: unset;
      grid-template-rows: 40px repeat(2, 45px);
   }
`;

const ButtonWrapper = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;
`;

const MobileDivider = styled.div`
   position: absolute;
   top: 43px;
   width: 325px;
   height: 1px;
   opacity: 0.4;
   background-color: var(--light-text-color);
`;


const Url = ({id, fullUrl, shortUrl, handleCopy, active}) => { 
   const isMobile = useMediaQuery({maxWidth: 375});

   return (
      <UrlWrapper>
         <FullUrl>{fullUrl}</FullUrl>
         <ShortUrl>{shortUrl}</ShortUrl>
         {isMobile && <MobileDivider/>}
         <ButtonWrapper>
            <CopyButton 
               onClick={() => handleCopy(shortUrl, id)}
               style={active === id ? {backgroundColor: 'var(--main-violet-color)'} : null}
            >
               {active === id ? 'Copied!' : 'Copy'}
            </CopyButton>
         </ButtonWrapper>
      </UrlWrapper>
   )
}

export {Url};