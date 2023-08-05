import { useSelector } from "react-redux";
import { styled } from "styled-components";
import copy from 'copy-to-clipboard';
import { useState } from "react";

import { Url } from "../components/Url";

const UrlGrid = styled.div`
   margin-top: 20px;
   display: grid;
   grid-auto-rows: 75px;
   row-gap: 15px;
`;

const UrlList = () => {
   const [active, setActive] = useState(null);
   const error = useSelector(state => state.error);
   const list = useSelector(state => state.list);

   const handleCopy = (str, key) => {
      copy(str);
      setActive(key);
   }

   return (
      <UrlGrid>
         {error === null && list.length && list.map(
            url => {
               const regex = /\\/g;
               const fullUrl = url.original_link.replaceAll(regex, '');
               const shortUrl = url.full_short_link.replaceAll(regex, '');
            return (
               <Url 
                  key={url.code}
                  id={url.code} 
                  fullUrl={fullUrl}
                  shortUrl={shortUrl}
                  handleCopy={handleCopy}
                  active={active}
               />
            )
         })}
      </UrlGrid>
   )
}

export {UrlList};

