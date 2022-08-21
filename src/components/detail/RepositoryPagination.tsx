import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useSearchParams } from 'react-router-dom';

interface RepositoryPaginationProps{
      currentPage: number
      pageChangeButtonHandler: (event: any) => void
      pageChangeButtonHandlerMobile: ({type, pageNumber}:{type?: string, pageNumber?: number}) => void
}

const MAX_MOBILE_WIDTH = 640;

function RepositoryPagination({pageChangeButtonHandler, currentPage, pageChangeButtonHandlerMobile}: RepositoryPaginationProps) {
      const [searchParams, setSetSearchParams] = useSearchParams();
      const [pageInput, setPageInput] = useState<number>((parseInt(searchParams.get('page')!).toString() === 'NaN') ?1 :parseInt(searchParams.get('page')!) );

      const inputChangeHandler =({target}: React.ChangeEvent<HTMLInputElement>): void=>{
            setPageInput(parseInt(target.value));
      }

      const inputSubmitHandler= (e: React.FormEvent<HTMLFormElement>): void | null=>{
            e.preventDefault();

            if (!pageInput) return null
            
            pageChangeButtonHandlerMobile({pageNumber: pageInput-1})
      }

      if(window.innerWidth < MAX_MOBILE_WIDTH){
            return(
                  <div className='w-[18rem] mb-20 flex flex-col gap-2'>
                        <span className='flex  justify-between '>
                              <button className='w-[6rem] py-[0.1rem] border-[0.1rem] rounded border-[#13171f] border-[rgba(31,111,235,0.3)]' 
                                    onClick={()=>pageChangeButtonHandlerMobile({type: 'previous'})}
                              >Previous</button>

                              <button className='w-[6rem] py-[0.1rem]  border-[0.1rem] rounded border-[#13171f] border-[rgba(31,111,235,0.3)]'
                                    onClick={()=>pageChangeButtonHandlerMobile({type: 'next'})}
                              >Next</button>
                        </span>

                        <form className='flex justify-end gap-3 align-bottom' onSubmit={inputSubmitHandler}>
                              <input className='w-[7rem] px-2 border-[0.1rem] rounded border-[#13171f] border-[rgba(31,111,235,0.3)] bg-inherit focus:outline-none focus:shadow-outline focus:bg-[#484f584f]' 
                                          value={pageInput} onChange={inputChangeHandler}
                                          type="number" placeholder='page no...'
                              />

                              <button className='w-[4rem] py-[0.1rem]  border-[0.1rem] rounded border-[#13171f] border-[rgba(31,111,235,0.3)]'
                                    type='submit'
                              >Go to</button>
                        </form>
                        
                  </div>
            )
      }

      return (
            <ReactPaginate
                  breakLabel='...'
                  nextLabel="next"
                  initialPage={(currentPage.toString() === 'NaN')? 0 : currentPage}
                  onPageChange={pageChangeButtonHandler}
                  pageRangeDisplayed={3}
                  pageCount={100}
                  previousLabel="previous"
                  renderOnZeroPageCount={undefined}
                  containerClassName='pagination flex justify-center m-5 text-[1rem] gap-2'
                  pageLinkClassName='px-3 py-1  border-[0.1rem] rounded border-[#13171f] hover:border-[rgba(31,111,235,0.3)]'
                  previousLinkClassName="page-num px-3 py-1  border-[0.1rem] rounded border-[#13171f] hover:border-[rgba(31,111,235,0.3)]"
                  nextLinkClassName='px-3 py-1 border-[0.1rem] rounded border-[#13171f] hover:border-[rgba(31,111,235,0.3)]'
                  activeLinkClassName="bg-[#1158c7] rounded border-[0.1rem] "
                   
            />
      )
      
}

export default RepositoryPagination


