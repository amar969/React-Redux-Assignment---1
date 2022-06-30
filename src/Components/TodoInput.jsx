import React from 'react'
import { useDispatch } from 'react-redux'
import {v4 as uuid} from "uuid";
import { addTodo } from '../Redux/action';

export const TodoInput = () => {

    const [inputValue, setInputValue] = React.useState("")

    const dispatch = useDispatch()

    const handleChange = (e) => {
        console.log(e.target.value)
        setInputValue(e.target.value)
    }

    const handleSubmit = () => {
        const payload = {
            title: inputValue, 
            status: false, 
            id: uuid()
        }

        dispatch( addTodo(payload))
    }

  return (
    <div>
        <input type="text" placeholder="Enter task here..." value={inputValue} onChange={handleChange}/>
        <button onClick={handleSubmit} > ADD </button>
    </div>
  )
}
