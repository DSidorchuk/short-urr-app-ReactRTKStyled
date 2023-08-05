import { styled } from "styled-components";

import {ReactComponent as FB} from "../assets/icons/icon-facebook.svg";
import {ReactComponent as Tw} from "../assets/icons/icon-twitter.svg";
import {ReactComponent as Pin} from "../assets/icons/icon-pinterest.svg";
import {ReactComponent as Ig} from "../assets/icons/icon-instagram.svg";

const IconsFlex = styled.div`
   display: flex;
   justify-content: space-between;
`;

const IconWrapper = styled.div`
   & > svg {
      cursor: pointer;
      &: hover {
         fill: var(--main-cyan-color);
      }
   }
`;

const SocialMedia = () => {
   return (
      <IconsFlex>
         <IconWrapper>
            <FB/>
         </IconWrapper>
         <IconWrapper>
            <Tw/>
         </IconWrapper>
         <IconWrapper>
            <Pin/>
         </IconWrapper>
         <IconWrapper>
            <Ig/>
         </IconWrapper>
      </IconsFlex>
   )
}

export {SocialMedia};