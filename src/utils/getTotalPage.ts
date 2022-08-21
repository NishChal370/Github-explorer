
export const getTotalPage= (link: string): number=>{
      
      if(link === undefined || link === null) return 0

      const lastPageLink = link.split(',').filter(str => str.includes('rel="last"'))[0].split(';')[0];

      const urlParam = new URLSearchParams(lastPageLink.slice(2,-1));
      const totalPages = urlParam.get('page')

      return (typeof totalPages === 'object' || totalPages=== '') ?0  : parseInt(totalPages)
}