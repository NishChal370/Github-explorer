import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { RepositoryCard } from "../components"
import { fetchRepositories } from "../features/repositorySlice";


function Home() {
      const dispatch = useAppDispatch();
      const { loading, error, repositories } = useAppSelector(state => state.repositories);
      const [filterValue, setFilterValue] = useState<string>('bestMatch');

      const filterSubmitHandler= ({ currentTarget }:React.FormEvent<HTMLSelectElement>)=>{

            setFilterValue(currentTarget.value);
      }


      useEffect(()=>{
            dispatch(fetchRepositories({sort: filterValue}));
      },[filterValue]);

      return (
            <div className="home__container flex flex-col py-2 px-4 
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
                        {loading && <div>Loading...</div>}

                        {!loading && error ? <div>Error: {error}</div> : null}

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
            </div>
      )
}

export default Home