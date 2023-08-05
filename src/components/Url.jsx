import { styled } from "styled-components";

import { CopyButton } from "../components/CopyButton";
import { FullUrl } from "../components/FullUrl";
import { ShortUrl } from "../components/ShortUrl";


const UrlWrapper = styled.div`
   padding: 0 30px;
   display: grid;
   grid-template-columns: 650px 360px 140px;
   column-gap: 15px;
   background-color: #ffff;
   border-radius: 5px;
`;

const ButtonWrapper = styled.div`
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
`;


const Url = ({id, fullUrl, shortUrl, handleCopy, active}) => { 
   return (
      <UrlWrapper>
         <FullUrl>{fullUrl}</FullUrl>
         <ShortUrl>{shortUrl}</ShortUrl>
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