import React from "react";
import {incCount, decCount, reset_Count} from "../Redux/action.js"
import { useSelector, useDispatch } from "react-redux";

export const Counter = () => {

    const {count} = useSelector( state => (state) )
    console.log(count)



    const dispatch = useDispatch()

    // store.dispatch(incCount(3))
    // console.log( "INC", store.getState())

    // store.dispatch(decCount(1))
    // console.log( "DEC", store.getState())

    // store.dispatch(addTodo({ title: "Eat", status: false, id:1 }))
    // console.log("Todo", store.getState())


    return(
        <>
        <h1> Count is {count}</h1>
        <button onClick={() => dispatch(incCount(1))}> INCREMENT </button>
        <button onClick={() => dispatch(decCount(1))} > DECREMENT </button>
        <button onClick={() => dispatch(reset_Count())} > RESET_COUNT </button>
        </>
    )
}