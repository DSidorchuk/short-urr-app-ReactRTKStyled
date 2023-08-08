import { styled } from "styled-components";

export const InputError = styled.div`
   padding: 15px 60px;
   grid-row: 3 / 4;
   text-align: left;
   font-style: oblique;
   font-size: var(--fs-input-error);
   font-weight: 700;
   color: var(--secondary-red-color);
   opacity: 0.6;

   @media (max-width: 375px) {
      padding: 0;
      display: flex;
      align-items: center;
      grid-row: 2 / 3;
      font-size: var(--fs-mob-input-error);
   }
`;