import { configureStore } from '@reduxjs/toolkit'
import quizReducer from './quiz/quizSlice'

export default configureStore({
    reducer: {
        quiz: quizReducer
    },
})