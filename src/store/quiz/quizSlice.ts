import { createSlice } from '@reduxjs/toolkit';
import { QuizModel } from '../../models';


const initialState: QuizModel = {
    value: [],
};

export const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        add: (state, action) => {
            state.value = [...state.value, action.payload]
        },
        clear: (state) => {
            state.value = []
        },
    },
})


export const { add, clear } = quizSlice.actions

export default quizSlice.reducer