import { styled } from "styled-components";
import { Link } from "react-router-dom";
import {ReactComponent as Image} from '../assets/logo.svg';


const LogoWrapper = styled.div`
   display: flex;
   justify-content: ${props => props.xPos ? props.xPos : 'start'};
   align-items: ${props => props.yPos ? props.yPos : 'center'};
   width: 100%;
   height: 100%;
`;

const Logo = ({light, yPos, xPos}) => {
   return (
      <LogoWrapper yPos={yPos} xPos={xPos}>
         <Link to="/">
            {light ? <Image fill='#ffff'/> : <Image />}
         </Link>
      </LogoWrapper>
   )
}

export {Logo};

