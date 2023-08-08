import { styled } from "styled-components";
import { Link } from "react-router-dom";

const NavGrid = styled.nav`
   display: grid;
   grid-template-columns: repeat(3, 140px);
   column-gap: 70px;

   @media(max-width: 375px){
      grid-template-columns: unset;
      grid-template-rows: repeat(3, 150px);
      justify-content: center;
      row-gap: 17px;
   }
`;

const NavGridTrack = styled.div`
   width: 100%;
`;

const Title = styled.h5`
   margin: 0;
   text-align: left;
   font-size: var(--fs-title-link);
   font-weight: 700;
   color: #ffff;

   @media(max-width: 375px){
      text-align: center;
      font-size: var(--fs-mob-title-link);
   }
`;

const UrlList = styled.ul`
   margin-top: 25px;
   padding: 0;
   list-style-type: none;

   @media(max-width: 375px){
      margin-top: 17px;
   }
`;

const UrlWrapper = styled.li`
   margin: 0;
   padding: 0;
   text-align: left;
   line-height: 32px;

   & > a {
      text-decoration: none;
      font-size: var(--fs-link);
      color: var(--light-text-color);

      &: hover {
         color: var(--main-cyan-color);
      }
   }

   @media(max-width: 375px){
      text-align: center;
      line-height: 28px;
      & > a {
         font-size: var(--fs-mob-footer-link);
      }
   }
`;

const FooterNav = () => {
   return (
      <NavGrid>
         <NavGridTrack>
            <Title>Features</Title>
            <UrlList>
               <UrlWrapper>
                  <Link>Link Shortering</Link>
               </UrlWrapper>
               <UrlWrapper>
                  <Link>Branded Links</Link>
               </UrlWrapper>
               <UrlWrapper>
                  <Link>Analytics</Link>
               </UrlWrapper>
            </UrlList>
         </NavGridTrack>
         <NavGridTrack>
            <Title>Resources</Title>
            <UrlList>
               <UrlWrapper>
                  <Link>Blog</Link>
               </UrlWrapper>
               <UrlWrapper>
                  <Link>Developers</Link>
               </UrlWrapper>
               <UrlWrapper>
                  <Link>Support</Link>
               </UrlWrapper>
            </UrlList>
         </NavGridTrack>
         <NavGridTrack>
            <Title>Company</Title>
            <UrlList>
               <UrlWrapper>
                  <Link>About</Link>
               </UrlWrapper>
               <UrlWrapper>
                  <Link>Our Team</Link>
               </UrlWrapper>
               <UrlWrapper>
                  <Link>Careers</Link>
               </UrlWrapper>
               <UrlWrapper>
                  <Link>Contact</Link>
               </UrlWrapper>
            </UrlList>
         </NavGridTrack>
      </NavGrid>
   )
}

export {FooterNav};