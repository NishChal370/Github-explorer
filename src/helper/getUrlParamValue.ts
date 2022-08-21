import { useSearchParams } from "react-router-dom";

export const GetUrlParamValue = ()=>{
      const [searchParams, setSetSearchParams] = useSearchParams();

      const urlPerPageValue = (searchParams.get('repoPerPage') === undefined || searchParams.get('repoPerPage') === null)
                                    ? '10'
                                    : searchParams.get('repoPerPage')!.toString()
      
      const urlSortValue = (searchParams.get('sort') === undefined || searchParams.get('sort') === null)
                                    ? 'bestMatch'
                                    : searchParams.get('sort')!

      const urlRepoValue = (searchParams.get('q') === undefined || searchParams.get('q')! === 'null')
                                    ? 'a'
                                    : searchParams.get('q')!
      
      const urlPageNumberValue = (parseInt(searchParams.get('page')!).toString() === 'NaN') 
                                    ?1 
                                    :parseInt(searchParams.get('page')!)


      return {urlPerPageValue, urlSortValue, urlRepoValue, urlPageNumberValue }
}