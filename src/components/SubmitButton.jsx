import { styled } from "styled-components";

export const SubmitButton = styled.button.attrs({type: 'submit'})`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 210px;
   height: var(--input-height);
   border: none;
   border-radius: var(--rect-radii);
   font-size: var(--fs-input);
   font-weight: 700;
   color: #ffff;
   cursor: pointer;
   background-color: var(--main-cyan-color);

   &: hover {
      background-color: var(--btn-cyan-hover-color);
   }

   @media (max-width: 375px) {
      grid-row: 3 / 4;
      width: 289px;
      height: var(--input-mob-height);
      border-radius: var(--mob-input-radii);
      font-size: var(--fs-mob-input);
      font-weight: 500;
   }
`