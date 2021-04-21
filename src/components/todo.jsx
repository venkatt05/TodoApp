import React, { useState } from 'react';
import ListComponent from './list';
import TodoForm from './TodoForm'

export default function Todo() {

    const [data, setData] = useState([]);

    function deleteTodo(e) {
        const newData = data.filter((value, index) => index !== e.target.id);
        setData([...newData]);
    }

    function markCompleted(e) {

        const newData = [...data];

        if (newData[e.target.id].isTaken) {
            newData[e.target.id].isComplete = !newData[e.target.id].isComplete;
            setData(newData);
        }
        else {
            alert('Take the card first !!')
            return;
        }
    }

    function markTaken(e) {

        const newData = [...data];

        if (newData[e.target.id].isComplete) {
            alert('The Card is already completed !!')
            return;
        }
        else {

            newData[e.target.id].isTaken = !newData[e.target.id].isTaken;
            setData(newData);
        }
    }

    function updateTodo(index, value) {

        const newData = [...data];

        newData[index].description = value;

        setData(newData);

    }

    function addList(e) {
        e.preventDefault();
        console.log(e.target.children[1].value);
        console.log(e.target.children[3].value);

        const newData = [...data, {
            "title": e.target.children[1].value,
            "description": e.target.children[3].value,
            "isComplete": false,
            "isTaken": false
        }];

        setData(newData);
    }


    return <><TodoForm addTodo={addList} /><h1 style={{ color: '#0F8495', marginLeft: '40px' }}>CARDS</h1>{data.map((info, index) => <ListComponent key={index} id={index} data={info} delete={deleteTodo} completed={markCompleted} update={updateTodo} taken={markTaken} />)}</>;
}

