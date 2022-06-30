import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {v4 as uuid} from "uuid";
import { TodoInput } from './TodoInput';
import { TodoList } from './TodoList';


export const Todo = () => {
    
    const {todos} = useSelector(state => state)

    const dispatch = useDispatch()

    console.log(todos)

    return(
        <>
        <h1> Todo </h1>

        <TodoInput /> 
        <TodoList /> 
        

        </>
    )
}