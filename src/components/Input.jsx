import { styled } from "styled-components";
import { Field } from 'formik';

export const Input = styled(Field)`
   margin: 0;
   padding: 0 0 0 15px;
   // padding-left: 30px;
   width: 75%;
   height: var(--input-height);
   border-radius: var(--rect-radii);
   font-size: var(--fs-input);
   font-weight: 700;
   color: var(--light-text-color);

   @media (max-width: 375px) {
      padding: 0 0 0 13px;
      width: 272px;
      height: var(--input-mob-height);
      border-radius: var(--mob-input-radii);
      font-size: var(--fs-mob-input);
      font-weight: 500;
   }
`;