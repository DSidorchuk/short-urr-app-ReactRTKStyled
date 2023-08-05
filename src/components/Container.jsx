import styled from 'styled-components'

export const Container = styled.div`
   width: 1240px;
   height: 100%;
   max-width: 1240px;
   margin: 0 auto;
   padding: 0 2rem;

   @media (max-width: 375px) {
      max-width: 100%
    }
`