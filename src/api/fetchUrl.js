export const fetchUrl = async (url) => {
   const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
   if (!res.ok) {
      throw new Error('Something went wrong')
   }
   return await res.json();
};
