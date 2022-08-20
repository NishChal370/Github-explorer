import { RepositoryCard } from "../components"


function Home() {

      return (
            <div className="home__container flex flex-col py-2 px-4 
                        sm:py-20 sm:w-[60rem]"
            > 
                  <header className="flex flex-col gap-6  
                              sm:flex-row-reverse sm:justify-between"
                  >
                        <div  className="flex gap-2 align-middle 
                              sm:w-[72%]"
                        >
                              <h3 className="self-center">Sort</h3>

                              <select id="cars" name="cars"
                                    className="w-full border-[0.1rem] border-[rgba(240,246,252,0.2)]  rounded  px-1  bg-[#21262d]  focus:outline-none focus:shadow-outline focus:bg-[#484f58]"
                              >
                                    <option value="best match">Best match</option>
                                    <option value="most starts">Most starts</option>
                                    <option value="fewest stars">Fewest stars</option>
                                    <option value="most forks">Most forks</option>
                                    <option value="fewest forks">Fewest forks</option>
                                    <option value="recent updated">Recent updated</option>
                                    <option value="least updated">Least updated</option>
                                    
                              </select>
                        </div>

                        <h1 className="text-lg font-semibold tracking-wider">10 topic results</h1>
                  </header>

                  <main className="repository__container">
                        <RepositoryCard 
                              fullName='jugyo/g'
                              description='The Kernel.g that works like Kernel.p by using terminal-notifier or growl.'
                              star={100}
                              watched={100}
                              forks={100} 
                              updatedDate='Oct 17, 2015'
                        />

                        <RepositoryCard
                              fullName='skybet/skybet.github.io'
                              description='SB&G Technology Site'
                              star={100}
                              watched={100}
                              forks={80} 
                              updatedDate='Oct 17, 2015'
                        />

                        <RepositoryCard
                              fullName='skybet/skybet.github.io'
                              description='SB&G Technology Site'
                              star={100}
                              watched={0}
                              forks={80} 
                              updatedDate='Oct 17, 2015'
                        />
                  </main>
            </div>
      )
}

export default Home