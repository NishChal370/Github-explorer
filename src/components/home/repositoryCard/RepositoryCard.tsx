import { useNavigate } from "react-router-dom";
import { EyeIcon, ForkIcon, GithubRepoIcon, StarIcon } from "../../../assets";
import StatusIcon from "./StatusIcon";
import { formatDate } from "../../../utils/formatDate";

interface RepositoryCardProps{
      fullName: string
      description: string
      star: number
      watched: number
      forks: number
      updatedDate: string
}


function RepositoryCard({fullName, description, star, watched, forks, updatedDate}: RepositoryCardProps) {
      const navigate = useNavigate();

      const navigateDetailPage = (fullName: string): void=>{
            const [owner, repository] = fullName.split('/');

            navigate(`/detail/${owner}/${repository}`);
      }
      

      return (
            <div className="repository__card  flex flex-col gap-2 border-t-[0.1rem] border-[#30363d] py-5 mt-3  w-full ">
                  <header className="flex gap-2 align-middle">
                        <img className="w-3 h-4 white--image self-center"
                              src={GithubRepoIcon} alt="repo-icon" 
                        />
                        
                        <h1 className="text-link--blue w-[16rem] truncate hover:cursor-pointer 
                              sm:w-[100%]" 
                              onClick={()=>navigateDetailPage(fullName)}
                        >{fullName}</h1>
                  </header>

                  <article className="text-[0.8rem] pl-5 flex flex-col gap-3 tracking-wider">
                        <h5 className="w-[10rem] truncate 
                                    extra-sm:w-[20rem] 
                                    md-sm:w-[24rem]
                                    sm:w-[30rem]
                                    lg:w-full"
                        >{description}</h5>

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
                              
                              <h6 className="text-muted--color">Updated on {formatDate(updatedDate)}</h6>
                        </div>
                        
                  </article>

            </div>
      )
}

export default RepositoryCard