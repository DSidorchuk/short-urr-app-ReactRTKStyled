import { styled } from "styled-components";
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from "react-redux";

import bgImage from "../assets/bg-shorten-desktop.svg";
import { SubmitButton } from "../components/SubmitButton";
import { loadShorten } from "./convert-bar-slice";
import { Input } from "../components/Input";
import { InputError } from "../components/InputError";

const FormGrid = styled.div`
   width: 1240px;
   display: grid;
   grid-template-rows: repeat(3, var(--input-height));
   background: var(--main-violet-color) url(${bgImage}) center / 110%;
   border-radius: var(--rect-radii);
   position: absolute;
   top: 0;
   left: 50%;
   transform: translate(-50%, -50%);
`;

const InputWrapper = styled.div`
   grid-row: 2 / 3;
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 0 60px;
`;


const ConvertBar = () => {
   const dispatch = useDispatch();

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
         {props => 
            (<FormGrid>
               <InputWrapper>
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
               </InputWrapper>
               <ErrorMessage name="url" component={InputError}/>
            </FormGrid>)}
      </Formik>
   )
}

export {ConvertBar}
