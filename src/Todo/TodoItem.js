import React from 'react'
// import TodoItem from './TodoItem'

export default function TodoIteam({todo, index}) {
    return(

        <li>
            <strong> {index + 1} </strong>
            {todo.title}</li>
    )
}