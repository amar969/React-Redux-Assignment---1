import { RESET_COUNT, INC_COUNT, DEC_COUNT, ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "./actionType";

export const incCount = (data) => ({
    type: INC_COUNT, 
    payload: data
})

export const decCount = (data) => ({
    type: DEC_COUNT, 
    payload: data
})

export const addTodo = (payload) => ({
    type: ADD_TODO, 
    payload
})

export const reset_Count = () => ({
    type : RESET_COUNT,   
})

export const toggleTodo = (payload) => ({
    type: TOGGLE_TODO,
    payload : payload
})

export const deleteTodo = (payload) => ({
    type: DELETE_TODO, 
    payload: payload
})