import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { AXIOS, URL_SEARCH_REPOSITORY } from "../api/Constent";
import { getTotalPage } from "../utils/getTotalPage";


type RepositoriesList = {
      full_name: string,
      description: string,
      stargazers_count: number, 
      watchers_count: number, 
      forks_count: number, 
      updated_at: string
}[]

type Repositories = {
      items: RepositoriesList,
      totalPage: number,
}

type InitialState = {
      loading: boolean
      repositories: RepositoriesList
      totalPage: number
      error: string
}


type FetchRepositoriesProps = {
      searchedRepository?: string
      pageNumber?: number,
      sort?: string,
      repoPerPage?: string ,
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
      totalPage: 0,
      error: '',
}

export const fetchRepositories = createAsyncThunk(
      '/fetchRepositories',
      ({searchedRepository=SEARCH_DEFAULT_VALUE, pageNumber=1, sort='bestMatch', repoPerPage='10'}: FetchRepositoriesProps = {})=>{

            searchedRepository = (searchedRepository === '') ?SEARCH_DEFAULT_VALUE :searchedRepository;

            return AXIOS
                  .get(URL_SEARCH_REPOSITORY+`?q=${searchedRepository}&page=${pageNumber}&per_page=${repoPerPage}&sort=${SORT_REPOSITORY[sort].sort}&order=${SORT_REPOSITORY[sort].order}`)
                  .then(({data, headers})=>{                     
                        return {items: data.items, totalPage: getTotalPage(headers['link'])}
                  })
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
            builder.addCase(fetchRepositories.fulfilled, (state, action: PayloadAction<Repositories>)=>{
                  state.loading = false
                  state.repositories = action.payload.items
                  state.totalPage = action.payload.totalPage
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