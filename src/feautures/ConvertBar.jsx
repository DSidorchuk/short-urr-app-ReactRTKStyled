import { styled } from "styled-components";
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";


import bgImage from "../assets/bg-shorten-desktop.svg";
import bgMobile from "../assets/bg-shorten-mobile.svg"
import { SubmitButton } from "../components/SubmitButton";
import { loadShorten } from "./convert-bar-slice";
import { Input } from "../components/Input";
import { InputError } from "../components/InputError";

const FormGrid = styled.div`
   position: absolute;
   top: 0;
   left: 50%;
   transform: translate(-50%, -50%);
   display: grid;
   grid-template-rows: repeat(3, var(--input-height));
   width: 1240px;
   border-radius: var(--rect-radii);
   background: var(--main-violet-color) url(${bgImage}) center / 110%;

   @media (max-width: 375px) {
      padding: 20px;
      grid-template-rows: var(--input-mob-height) 30px var(--input-mob-height);
      justify-content: center;
      width: calc(var(--mob-content-width) - 40px);
      background: var(--main-violet-color) url(${bgMobile}) no-repeat right;
   }
`;

const InputWrapper = styled.div`
   padding: 0 60px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   grid-row: 2 / 3;
`;


const ConvertBar = () => {
   const dispatch = useDispatch();
   const isDesktop = useMediaQuery({minWidth: 1200});
   const isMobile = useMediaQuery({maxWidth: 375});

   const handleSubmit = ({url}) => {
      dispatch(loadShorten(url));
   }

   return (
      <Formik
         initialValues={{url: ''}}
         validationSchema={Yup.object({
            url: Yup.string()
                     .min(5, 'At least 5 characters')
                     .required('Please add a link')
         })}
         onSubmit={(value, {resetForm}) => {
            handleSubmit(value);
            resetForm();
         }}
      >
         {props => getForm(props, isDesktop, isMobile)}
      </Formik>
   )
}

function getForm (props, isDesktop, isMobile) {
   // Change input color if it is empty
   const handleBlur = (e) => {
      if(!e.currentTarget.value) {
         e.currentTarget.style.border = '3px solid var(--secondary-red-color)';
         e.currentTarget.style.color = 'var(--secondary-red-color)';
      }
   }
   // Change input color on focus
   const onFocus = (e) => {
      e.currentTarget.style.border = 'none';
      e.currentTarget.style.color = 'var(--light-text-color)';
   }
   const form = (
      <>
         <Input 
            placeholder="Shorten a link here..."
            type="text"
            name="url"
            id="url"
            onBlur={(e) =>{
               props.handleBlur(e);
               handleBlur(e);
               }}
            onFocus={onFocus}
         />
         <SubmitButton onClick={props.handleSubmit}>
            Shorten It!
         </SubmitButton>
      </>
   )

   return (
      <FormGrid>
         {isDesktop && <InputWrapper>{form}</InputWrapper>}
         {isMobile && form}
         <ErrorMessage name="url" component={InputError}/>
      </FormGrid>
   )
};

export {ConvertBar}
