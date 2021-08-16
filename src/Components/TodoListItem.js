import React from 'react'
import './TodoListItem.css'

export default function TodoListItem({label, important = false}) {
    const Style = {
        color:important ? 'tomato' : 'black'
    }
    return (
        <div>
            <span style={Style}>{label}</span>
        </div>
    )
}




