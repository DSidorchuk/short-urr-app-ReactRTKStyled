import { styled } from "styled-components";
import { Link } from "react-router-dom";

const NavGrid = styled.nav`
   display: grid;
   grid-template-columns: repeat(3, 140px);
   column-gap: 70px;
`;

const NavGridTrack = styled.div`
   width: 100%;
`;

const Title = styled.h5`
   margin: 0;
   font-weight: 700;
   font-size: var(--fs-title-link);
   text-align: left;
   color: #ffff;
`;

const UrlList = styled.ul`
   margin-top: 25px;
   list-style-type: none;
   padding: 0;
`;

const UrlWrapper = styled.li`
   margin: 0;
   padding: 0;
   text-align: left;
   line-height: 32px;

   & > a {
      text-decoration: none;
      color: var(--light-text-color);
      font-size: var(--fs-link);

      &: hover {
         color: var(--main-cyan-color);
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