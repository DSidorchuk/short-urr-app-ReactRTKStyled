import { styled } from "styled-components";

export const ShortUrl = styled.div`
   display: flex;
   justify-content: flex-end;
   align-items: center;
   font-size: var(--fs-link);
   font-weight: 500;
   color: var(--main-cyan-color);

   @media(max-width: 375px) {
      justify-content: flex-start;
      font-size: var(--fs-mob-link);
      font-weight: 700;
   }
`;