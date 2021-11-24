import './App.css';
import { useState } from 'react' 
import trash from './images/premium-icon-trash-can-4914888.png'
import {  Input, Button, Checkbox } from 'antd'
import { DeleteOutlined } from '@ant-design/icons';

function TDCard({ todo, onChange, deleteTodo, editing}) {
  const [edit, setEdit] = useState(false)
  const [value, setValue] = useState(todo.name)
  const classes = ['titleToDo']
  if (todo.done) {
    classes.push('done')
  }

  function clickHandler() {
    setEdit(true)
  }

  function submitHandler(event) {
    event.preventDefault()
    if (value.trim()) {
      editing(todo.uuid, value, todo.done)
      setEdit(false)
  }
  }

  function escHandler(event) {
    if (event.key === 'Escape') {
      setEdit(false)
    }
  }
    return (
        <section className="td">
        <section >
               <Checkbox className='checkBox' onChange={ () => onChange(todo.uuid, todo.done, todo.name) } checked={ todo.done } ></Checkbox>
               {edit ? <Input className='inputForEdit' autoFocus onBlur={() => setEdit(false)} onPressEnter={event => submitHandler(event)} onKeyDown={ (event) => escHandler(event)} 
               value={value} onChange={event => setValue(event.target.value)}  /> : 
               <button onClick={ clickHandler } className='qwe'><span  className={ classes.join(' ') }> { todo.name } </span></button>}
        </section>
        <section>
          <label className="lbltext"> { todo.createdAt.slice(0, 10) } </label>
          <Button  className="trash" title="Delete plan" onClick={ () => {
            deleteTodo(todo.uuid)
            setEdit(false)}} icon={<DeleteOutlined />} size='small'/>
      </section>
    </section>
    )
}


export default TDCard