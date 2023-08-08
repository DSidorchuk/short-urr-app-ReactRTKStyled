import { styled } from "styled-components";

export const FullUrl = styled.div`
   display: flex;
   justify-content: flex-start;
   align-items: center;
   font-size: var(--fs-link);
   font-weight: 500;
   color: var(--dark-text-color);

   @media(max-width: 375px) {
      font-size: var(--fs-mob-link);
   }
`;