import { configureStore } from "@reduxjs/toolkit";
import repositoryReducer from '../features/repositorySlice';

const store = configureStore({
      reducer: {
            repositories: repositoryReducer,
      }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch