import { configureStore } from "@reduxjs/toolkit";
import repositoryReducer from '../features/repositorySlice';
import userRepositoryReducer from '../features/userRepositorySlice';

const store = configureStore({
      reducer: {
            repositories: repositoryReducer,
            userRepository: userRepositoryReducer,
      }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch