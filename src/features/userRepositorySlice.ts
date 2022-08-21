import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { AXIOS, URL_OWNER_REPOSITORY } from "../api/Constent";

type UserRepository = {
      [key: string]: any
}

type InitialState = {
      loading: boolean
      userRepository: UserRepository
      error: string
}

type FetchUserRepository= {
      owner: string | undefined
      repository: string | undefined
}

const initialState: InitialState = {
      loading: false,
      userRepository: {},
      error: '',
}

export const fetchUserRepository = createAsyncThunk(
      '/fetchUserRepository',
      ({owner='', repository=''}:FetchUserRepository)=>{
            return AXIOS
                  .get(URL_OWNER_REPOSITORY+`${owner}/${repository}`)
                  .then(({data})=> data )
      }
)


const userRepositorySlice = createSlice({
      name: 'userRepository',
      initialState,
      reducers: {},
      extraReducers: builder=> {
            builder.addCase(fetchUserRepository.pending, (state)=>{
                  state.loading = true
            })
            builder.addCase(fetchUserRepository.fulfilled, (state, action: PayloadAction<UserRepository[]>)=>{
                  state.loading = false
                  state.userRepository = action.payload
                  state.error = ''
            })
            builder.addCase(fetchUserRepository.rejected, (state, action)=>{
                  state.loading = false
                  state.userRepository = {}
                  state.error = action.error.message || 'Something went wrong'
            })
      }
})

export default userRepositorySlice.reducer;