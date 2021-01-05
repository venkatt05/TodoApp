import React from 'react';
import '../CSS/Form.css'

export default function TodoForm(props) {
    return <div className='formArea'><form onSubmit={props.addTodo}>
        <label htmlFor='title'>Title </label><input type='text' name='title' required />
        <label htmlFor='description'>  Description </label><textarea name='description' style={{ resize:'none', width:'500px',height:'100px'}}/>
        <input type='submit' value='Add' />
    </form></div>
}