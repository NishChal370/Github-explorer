import { useSearchParams } from "react-router-dom";

interface GetUrlParamValueReturn {
      urlPerPageValue : string, 
      urlSortValue : string, 
      urlRepoValue : string, 
      urlPageNumberValue : number, 
}

export const GetUrlParamValue = (): GetUrlParamValueReturn=>{
      const [searchParams, setSetSearchParams] = useSearchParams();

      const urlPerPageValue: string = (searchParams.get('repoPerPage') === undefined || searchParams.get('repoPerPage') === null)
                                    ? '10'
                                    : searchParams.get('repoPerPage')!.toString()
      
      const urlSortValue: string = (searchParams.get('sort') === undefined || searchParams.get('sort') === null)
                                    ? 'bestMatch'
                                    : searchParams.get('sort')!

      const urlRepoValue: string = (searchParams.get('q') === undefined || searchParams.get('q')! === 'null')
                                    ? 'null'
                                    : searchParams.get('q')!
      
      const urlPageNumberValue: number = (parseInt(searchParams.get('page')!).toString() === 'NaN') 
                                    ?1 
                                    :parseInt(searchParams.get('page')!)


      return {urlPerPageValue, urlSortValue, urlRepoValue, urlPageNumberValue }
}