import { useState } from "react";
import { GithubLogoIcon } from "../../assets";
import { useAppDispatch } from "../../app/hooks";
import { fetchRepositories } from "../../features/repositorySlice";


function Header() {
      const dispatch = useAppDispatch();

      const [searchedRepository, setSearchedRepository] = useState<string>('');

      const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void=>{
            const { value } = event.target;

            setSearchedRepository(value);
      }

      const inputSubmitHandler = (event: React.FormEvent<HTMLFormElement>): void=>{
            event.preventDefault();

            dispatch(fetchRepositories({searchedRepository}));
      }

      return (
            <header className="header__container bg-[#161b22] text-sm border-b-[0.1rem] border-[#30363d]
                  sm:border-none sm:shadow-md"
            >
                  <div className="header__wrapper flex flex-col w-full gap-4 py-2 px-3
                        sm:flex-row sm:py-2 sm:px-6"
                  >
                        <div className="header__logo w-9 self-center">
                              <img className="w-full h-full"
                                    src={GithubLogoIcon} alt="github-logo"
                              />
                        </div>

                        <nav className="header__nav flex flex-col align-middle 
                              sm:flex-row sm:gap-4"
                        >
                              <form onSubmit={inputSubmitHandler}>
                                    <input 
                                          className=" w-full border-[0.1rem] border-[rgba(240,246,252,0.2)]  rounded mb-4 py-1 px-4  bg-[#13171f] focus:outline-none focus:shadow-outline focus:bg-[#484f58]
                                                sm:m-1 sm:w-44
                                                md:w-60"
                                          placeholder="Search repository"
                                          type="text"  
                                          value={searchedRepository}
                                          onChange={inputChangeHandler}
                                    />
                              </form>
                              

                              <span className="flex flex-col align-middle
                                    sm:flex-row sm:gap-2"
                              >
                                    <h3 className="border-t-[0.1rem] border-[#30363d] py-2
                                          sm:border-none"
                                    >Pull requests</h3>

                                    <h3  className="border-t-[0.1rem] border-[#30363d] py-2
                                          sm:border-none"
                                    >Issues</h3>

                                    <h3  className="border-t-[0.1rem] border-[#30363d] py-2
                                          sm:border-none"
                                    >Marketplace</h3>

                                    <h3  className="border-t-[0.1rem] border-[#30363d] py-2
                                          sm:border-none"
                                    >Explore</h3>
                              </span>
                        </nav>
                  </div>

            </header>
      )
}

export default Header