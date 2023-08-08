import { styled } from "styled-components";

const Button = styled.button`
   display: flex;
   justify-content: center;
   align-items: center;
   border: none;
   border-radius: var(--radii);
   background-color: var(--main-cyan-color);

   & > a {
      text-decoration: none;
      font-weight: 700;
      color: #ffff;
   }
   &: hover {
      background-color: var(--btn-cyan-hover-color);
   }
`;

const ButtonSm = styled(Button)`
   width: 130px;
   height: 50px;
   font-size: var(--fs-sm-btn);
`;

const ButtonLg = styled(Button)`
   width: 170px;
   height: 50px;
   font-size: var(--fs-lg-btn);
`;

const CircButton = ({size, children}) => {
   return (
      <>
         {
            size === 'sm' 
               ? <ButtonSm>{children}</ButtonSm> 
               : <ButtonLg>{children}</ButtonLg>}
      </>
   )
}

export {CircButton};