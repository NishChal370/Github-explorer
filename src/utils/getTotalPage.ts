
export const getTotalPage= (link: string): number=>{
      
      if(link === undefined || link === null) return 0

      let urlParam;
      let  totalPages;
      let secondLastPageLink;
      let lastPageLink = link.split(',').filter(str => str.includes('rel="last"'))[0];

      if( lastPageLink === undefined ){
            secondLastPageLink = link.split(',').filter(str => str.includes('rel="prev"'))[0].split(';')[0];
            urlParam = new URLSearchParams(secondLastPageLink.slice(2,-1));
            totalPages = parseInt(urlParam.get('page')!)+1
      }
      else{
            lastPageLink = lastPageLink.split(';')[0];
            urlParam = new URLSearchParams(lastPageLink.slice(2,-1));
            totalPages = parseInt(urlParam.get('page')!)
      }

      return totalPages
}