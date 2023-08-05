import { styled } from "styled-components";

export const SubmitButton = styled.button.attrs({type: 'submit'})`
   display: flex;
   justify-content: center;
   align-items: center;
   border: none;
   border-radius: var(--rect-radii);
   background-color: var(--main-cyan-color);
   cursor: pointer;
   width: 210px;
   height: var(--input-height);
   font-size: var(--fs-input);
   color: #ffff;
   font-weight: 700;

   &: hover {
      background-color: var(--btn-cyan-hover-color);
   }
`