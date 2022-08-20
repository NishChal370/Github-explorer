import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";


type RepositoriesList = {
      full_name: string,
      description: string,
      stargazers_count: number, 
      watchers_count: number, 
      forks_count: number, 
      updated_at: string
}[]

type InitialState = {
      loading: boolean
      repositories: RepositoriesList
      error: string
}


type FetchRepositoriesProps = {
      searchedRepository?: string
      pageNumber?: number,
      sort?: string, 
}

type Sort = {
      sort: string
      order: string
}

type SortRepository= {
      [key: string]: Sort,
}

const SEARCH_DEFAULT_VALUE: string ='a'


const SORT_REPOSITORY: SortRepository = {
      bestMatch:  {sort:'', order:'asc'},
      mostStars: {sort:'stars', order:'desc'},
      fewestStars: {sort:'stars', order:'asc'},
      mostForks: {sort:'forks', order:'desc'},
      fewestForks: {sort:'forks', order:'asc'},
      recentUpdated: {sort:'updated', order:'asc'},
      lastUpdated: {sort:'updated', order:'desc'},
}

const initialState:InitialState = {
      loading: false,
      repositories: [],
      error: '',
}

export const fetchRepositories = createAsyncThunk(
      '/fetchRepositories',
      ({searchedRepository=SEARCH_DEFAULT_VALUE, pageNumber=1, sort='bestMatch'}: FetchRepositoriesProps = {})=>{

            searchedRepository = (searchedRepository === '') ?SEARCH_DEFAULT_VALUE :searchedRepository

            console.log(`https://api.github.com/search/repositories?q=${searchedRepository}&page=${pageNumber}&per_page=10&sort=${SORT_REPOSITORY[sort].sort}&order=${SORT_REPOSITORY[sort].order}`);
            
            return axios
                  .get(`https://api.github.com/search/repositories?q=${searchedRepository}&page=${pageNumber}&per_page=10&sort=${SORT_REPOSITORY[sort].sort}&order=${SORT_REPOSITORY[sort].order}`)
                  .then(({data})=> data.items)
      }
)


const repositorySlice = createSlice({
      name: 'repositories',
      initialState,
      reducers: {},
      extraReducers: builder=> {
            builder.addCase(fetchRepositories.pending, (state)=>{
                  state.loading = true
            })
            builder.addCase(fetchRepositories.fulfilled, (state, action: PayloadAction<RepositoriesList>)=>{
                  state.loading = false
                  state.repositories = action.payload
                  state.error = ''
            })
            builder.addCase(fetchRepositories.rejected, (state, action)=>{
                  state.loading = false
                  state.repositories = []
                  state.error = action.error.message || 'Something went wrong'
            })
      }
})

export default repositorySlice.reducer