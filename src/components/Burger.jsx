import { styled } from "styled-components";

const Line = styled.span`
   display: block;
   width: 25px;
   height: 3px;
   background-color: var(--burger-bg-color);
`;

const BurgerWrapper = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   align-items: center;
   width: 25px;
   height: 25px;
`;

const Burger = ({onClick}) => {
   return (
      <BurgerWrapper onClick={onClick}>
         <Line/>
         <Line/>
         <Line/>
      </BurgerWrapper>
   )
}

export {Burger};