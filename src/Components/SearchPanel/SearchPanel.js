import React from 'react'
import { useState } from 'react';
import  './SearchPanel.css';

export default function SearchPanel({changeWord}) {
const [value, setValue] = useState('')
const onChange = (e) => {
    e.preventDefault();
    setValue(e.target.value)
    changeWord(e.target.value)
}
    return (
        <input type="text"
              className="form-control search-input"
              placeholder="type to search"
              onChange={onChange}
               />
    )
}
