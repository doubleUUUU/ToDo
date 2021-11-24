import 'antd/dist/antd.css';
import './App.css'
import { useState } from 'react'
import {  Input } from 'antd'

const { Search } = Input;
function InputToDo({ addTodo }) {
    const [value, setValue] = useState('')
    
    return (
        <section>
            <Search onSearch={() => {
                                addTodo(value)
                                setValue('')
              }} autoFocus type="text" value={value}  onChange={event => setValue(event.target.value)} 
              enterButton='Add' placeholder="I want to do..." style={{ width: 560, height: 40}} title="Write your plan here"/>  
        </section>
    )
}


export default InputToDo