import { styled } from "styled-components";
import { Field } from 'formik';

export const Input = styled(Field)`
   width: 75%;
   height: var(--input-height);
   padding: 0 0 0 15px;
   margin: 0;
   border-radius: var(--rect-radii);
   padding-left: 30px;
   font-size: var(--fs-input);
   font-weight: 700;
   color: var(--light-text-color);
`;