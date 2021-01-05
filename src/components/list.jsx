import React from 'react';
import '../CSS/Todos.css'

export default function ListComponent(props) {

    return <div className='card container' style={{ backgroundColor: props.data.isTaken ? (props.data.isComplete ? 'green' : '#BA4A00') : '#0F8495' }}>
        <h3 style={{ color: 'whitesmoke' }} onClick={e => { if (e.target.nextElementSibling.hasAttribute('hidden')) { e.target.nextElementSibling.removeAttribute('hidden') } else { e.target.nextElementSibling.setAttribute('hidden', '') } }}>{props.data.title}</h3>
        <div className='container' hidden>
            <textarea value={props.data.description} style={{ resize: 'none', height: '60px', width: '100%' }} onChange={(e) => props.update(props.id, e.target.value)} />
            <button id={props.id} onClick={props.completed}>Complete</button>
            <button id={props.id} onClick={props.delete}>Delete</button>
            <button id={props.id} onClick={props.taken}>Take</button>
        </div>
    </div>;
}