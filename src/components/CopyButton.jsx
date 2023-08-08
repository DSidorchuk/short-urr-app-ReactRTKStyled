import { styled } from "styled-components";

export const CopyButton = styled.button`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 110px;
   height: 43px;
   border: none;
   border-radius: 5px;
   cursor: pointer;
   font-size: var(--fs-sm-btn);
   font-weight: 700;
   color: #ffff;
   background-color: var(--main-cyan-color);
   
   &:hover {
      opacity: 0.6;
   }

   @media(max-width: 375px) {
      width: 100%;
      height: 40px;
   }
`;