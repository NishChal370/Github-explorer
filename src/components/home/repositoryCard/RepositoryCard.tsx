import { EyeIcon, ForkIcon, GithubRepoIcon, StarIcon } from "../../../assets";
import StatusIcon from "./StatusIcon";

interface RepositoryCardProps{
      fullName: string
      description: string
      star: number
      watched: number
      forks: number
      updatedDate: string
}


function RepositoryCard({fullName, description, star, watched, forks, updatedDate}: RepositoryCardProps) {

      return (
            <div className="repository__card  flex flex-col gap-2 border-t-[0.1rem] border-[#30363d] py-5 mt-3 ">
                  <header className="flex gap-2 align-middle text-center w-[18rem]">
                        <img className="w-3 h-4 white--image self-center"
                              src={GithubRepoIcon} alt="repo-icon" 
                        />
                        
                        <h1 className="text-link--blue">{fullName}</h1>
                  </header>

                  <article className="text-[0.8rem] pl-5 flex flex-col gap-3 tracking-wider">
                        <h5>{description}</h5>
                        
                        <div className="flex flex-col sm:flex-row 
                              sm:gap-2"
                        >
                              <aside className="flex justify-start gap-2">
                                    <StatusIcon
                                          name="star"
                                          statusTotal={star}
                                          icon={StarIcon}
                                    />

                                    <StatusIcon
                                          name="fork"
                                          statusTotal={forks}
                                          icon={ForkIcon}
                                    />

                                    <StatusIcon
                                          name="watched"
                                          statusTotal={watched}
                                          icon={EyeIcon}
                                    />
                              </aside>
                              
                              <h6 className="text-muted--color">Updated on {updatedDate}</h6>
                        </div>
                        
                  </article>

            </div>
      )
}

export default RepositoryCard