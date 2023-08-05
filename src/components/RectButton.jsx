import { styled } from "styled-components";

const Button = styled.button`
   display: flex;
   justify-content: center;
   align-items: center;
   border: none;
   border-radius: var(--rect-radii);
   background-color: var(--main-cyan-color);
   cursor: pointer;
`;

const ButtonSm = styled(Button)`
   width: 130px;
   height: 50px;
   font-size: var(--fs-sm-btn);
`;

const ButtonLg = styled(Button)`
   width: 210px;
   height: var(--input-height);
   font-size: var(--fs-input);
   color: #ffff;
   font-weight: 700;

   &: hover {
      background-color: var(--btn-cyan-hover-color);
   }
`;

const RectButton = ({size, children, type, onClick}) => {
   return (
      <>
         {
            size === 'sm' 
               ? <ButtonSm type={type} onClick={onClick}>{children}</ButtonSm> 
               : <ButtonLg type={type} onClick={onClick}>{children}</ButtonLg>}
      </>
   )
}

export {RectButton};