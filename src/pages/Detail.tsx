import { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { BranchIcon, IssueIcon } from '../assets';
import { MainText, StatusIconText } from '../components';
import Avatar from '../components/detail/Avatar';
import { fetchUserRepository } from '../features/userRepositorySlice';

function Detail() {
      const {owner, repository} = useParams<string>();
      const dispatch = useAppDispatch();
      const { loading, error, userRepository } = useAppSelector(state => state.userRepository);

      useEffect(()=>{
            dispatch(fetchUserRepository({owner , repository})) 
      },[])

      if(loading ) return <h1>Loading...</h1>

      if (!loading && error ) return <div>Error: {error}</div> 

      if (!loading && Object.keys(userRepository).length) return (
            <div className='detail__container py-4  px-4 flex flex-col gap-4  justify-center mt-[2rem] 
                  sm:w-[60rem] sm:text-center sm:mt-[6rem]
                  md:w-[50rem]'
            >
                  <Avatar
                        icon={userRepository.owner.avatar_url}
                  />

                  <article className='flex flex-col gap-2 justify-center
                              sm:col-span-2 '
                  >
                        <MainText 
                              link={userRepository.html_url}
                              title='User'
                              textSize='text-2xl'
                              name={userRepository.owner.login}
                        />

                        <MainText 
                              link={userRepository.svn_url}
                              title='RepositoryName'
                              textSize='text-xl'
                              name={userRepository.name}
                        />
                        <div className='flex flex-col gap-2 justify-center
                                    sm:flex sm:flex-row'
                        >
                              <StatusIconText
                                    icon={IssueIcon}
                                    text= {`${userRepository.open_issues_count} issue`}
                              />

                              <StatusIconText
                                    icon={BranchIcon}
                                    text= {userRepository.default_branch}
                              />
                        </div>
                  </article>
            </div>
      )

      return null;
}

export default Detail