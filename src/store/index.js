import { configureStore } from '@reduxjs/toolkit'
import publicationsReduser from './publicationsSlice'
import userReduser from './userSlice'

export default configureStore({
  reducer: {
    user: userReduser,
    publications: publicationsReduser
  },
})