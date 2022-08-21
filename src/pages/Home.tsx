import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ErrorMessage, Loading } from "../components/common";
import { GetUrlParamValue } from "../helper/getUrlParamValue";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchRepositories } from "../features/repositorySlice";
import { RepositoryPagination, RepositoryCard } from "../components";



function Home() {
      const dispatch = useAppDispatch();
      const [searchParams, setSetSearchParams] = useSearchParams();
      const { urlSortValue, urlPerPageValue, urlRepoValue, urlPageNumberValue } = GetUrlParamValue();
      const { loading, error, repositories, totalPage } = useAppSelector(state => state.repositories);
      const [filterValue, setFilterValue] = useState<string>(urlSortValue);
      const [repoPerPage, setRepoPerPage] = useState<string>(urlPerPageValue);
      const [currentPage, setCurrentPage] = useState<number>(urlPageNumberValue-1 )

      const filterSubmitHandler= ({ currentTarget }:React.FormEvent<HTMLSelectElement>): void=>{
            setFilterValue(currentTarget.value);
      }


      const pageChangeButtonHandler = (event: any): void=>{
            setCurrentPage(event.selected);
      }


      // for pagination button of mobile screen (max 640)
      const pageChangeButtonHandlerMobile= ({type, pageNumber}:{type?: string, pageNumber?: number}) : void=>{
            switch (type) {
                  case 'previous':
                        if(currentPage>0){
                              setCurrentPage((previousPage)=> previousPage-1);
                        }
                        break;

                  case 'next':
                        if(currentPage<totalPage){
                              setCurrentPage((previousPage)=> previousPage+1);
                        }
                        break;

                  default:
                        if (pageNumber === undefined) break

                        if(pageNumber>=0 && pageNumber<totalPage){
                              setCurrentPage(pageNumber);
                        }
                        break;
            }
      }


      const changePerPageRepoHandler = ({ currentTarget }:React.FormEvent<HTMLSelectElement>): void=>{
            setCurrentPage(0);
            setRepoPerPage(currentTarget.value);
      }

      

      useEffect(()=>{
            setSetSearchParams({
                  q: urlRepoValue,
                  sort: filterValue.toString(),
                  repoPerPage: repoPerPage.toString(),
                  page: (currentPage+1).toString(),
            });

            dispatch(fetchRepositories({
                  searchedRepository: urlRepoValue,
                  sort: filterValue, 
                  repoPerPage: repoPerPage,
                  pageNumber:(currentPage+1),
            }));
      },[repoPerPage, currentPage, filterValue])


      
      return (
            <div className="home__wrapper flex flex-col py-4 px-4 mt-[2%] 
                        sm:py-20 sm:w-[60rem]"
            > 
                  <header className="flex flex-col gap-6 
                              sm:flex-row-reverse sm:justify-between"
                  >
                        
                        <div  className="flex gap-2 align-middle 
                              sm:w-[62%]"
                        >
                              <h3 className="self-center">Sort</h3>
                              <select id="filter" name="filter" value={filterValue} onChange={filterSubmitHandler}
                                    className="w-full border-[0.1rem] border-[rgba(240,246,252,0.2)]  rounded  px-1 bg-[#21262d]  focus:outline-none focus:shadow-outline focus:bg-[#484f58]"
                              >
                                    <option value="bestMatch">Best match</option>
                                    <option value="mostStars">Most stars</option>
                                    <option value="fewestStars">Fewest stars</option>
                                    <option value="mostForks">Most forks</option>
                                    <option value="fewestForks">Fewest forks</option>
                                    <option value="recentUpdated">Recent updated</option>
                                    <option value="lastUpdated">Last updated</option>
                                    
                              </select>
                              
                        </div>  
                                          
                        <h1 className="text-lg font-semibold tracking-wider">{repositories.length} topic results</h1>
                  </header>

                  <main className="repository__container">

                        {loading && <Loading/>}

                        {!loading && error ? <ErrorMessage message={error}/> : null}

                        {!loading && repositories.length
                              ? repositories.map(
                                    ({full_name, description, stargazers_count, watchers_count, forks_count, updated_at})=>{return(
                                          <RepositoryCard 
                                                key={nanoid()}
                                                fullName={full_name}
                                                description={description}
                                                star={stargazers_count}
                                                watched={watchers_count}
                                                forks={forks_count} 
                                                updatedDate={updated_at}
                                          />
                                    )}
                              )
                              :     null}
                  </main>

                  <footer className="flex justify-center mt-[2rem] px-0">
                        <RepositoryPagination
                              pageChangeButtonHandler={pageChangeButtonHandler}
                              pageChangeButtonHandlerMobile={pageChangeButtonHandlerMobile}
                              currentPage={currentPage}
                              repoPerPage={repoPerPage}
                              changePerPageRepoHandler={changePerPageRepoHandler}
                        />
                  </footer>
            </div>
      )
}

export default Home