import { styled } from "styled-components";

export const CopyButton = styled.button`
   width: 110px;
   height: 43px;
   display: flex;
   justify-content: center;
   align-items: center;
   border: none;
   border-radius: 5px;
   cursor: pointer;
   background-color: var(--main-cyan-color);
   color: #ffff;
   font-weight: 700;
   font-size: var(--fs-sm-btn);

   &:hover {
      opacity: 0.6;
   }
`;