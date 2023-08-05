import { styled } from "styled-components";
import { Link } from "react-router-dom";
import {ReactComponent as Image} from '../assets/logo.svg';


const LogoWrapper = styled.div`
   width: 100%;
   height: 100%;
   display: flex;
   justify-content: start;
   align-items: ${props => props.position ? props.position : 'center'};
`;

const Logo = ({light, position}) => {
   return (
      <LogoWrapper position={position}>
         <Link to="/">
            {light ? <Image fill='#ffff'/> : <Image />}
         </Link>
      </LogoWrapper>
   )
}

export {Logo};

