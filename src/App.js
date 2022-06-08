import React, { useState } from 'react';
import './App.css';
import Day from './Day';

function App(props) {
    const [todos, setTodos] = useState([])
    const [todo, setTodo] = useState('')
    const [completed, setCompleted] = useState([])
    const [canceled, setCanceled] = useState([])
    return (
        <div className='all' >
            <div className="app">
                <div className="mainHeading">
                    <h1>ToDo List</h1>
                </div>
                <div className="subHeading">
                    <br />
                    <Day/> 
                    

                </div>
                <div className="input">
                    <input  type="text" value={todo} onChange={(e) => setTodo(e.target.value)} placeholder="&nbsp;🖊️ Add item..." />
                    <i onClick={() =>{
                         setTodos([...todos, { id: Date.now(), text: todo, status: "Done" }])
                         setTodo('')
                    }} className="fas fa-plus"></i>
                </div>
                <div className="todos">
                    {todos.map((obj) => {
                        return (
                            <div className="todo">
                                <div className="left">
                                    <input className='type' type="button" onClick={(e) => {
                                        setTodos(todos.filter((obj2) => {
                                            if (obj2.id === obj.id) {
                                                setCompleted([...completed, obj2])
                                            }return null}))
                                        setTodos(todos.filter((element) => element.id !== obj.id))}}
                                        value={obj.status} name="" id="" />
                                    <p>{obj.text}</p>
                                </div>
                                <div className="right">
                                    <i onClick={(e) => {
                                        setTodos(todos.filter((element) =>{
                                            setCanceled([...canceled,element])
                                        }))
                                        setTodos(todos.filter((element) => element.id !== obj.id))
                                    }} className="fas fa-times"></i>
                                </div>
                            </div>)
                    })}


                </div>
            </div>

            <div className='petti'>

                <div className='completed' >
                    <h2>Completed Tasks⏳️</h2>
                    {completed.map((obj) => {
                        return (<p>{obj.text}</p>)})}
                </div>
                <div className='canceled'>
                    <h2>Canceled Tasks🗑️</h2>
                    {canceled.map((obj) => {
                        return (<p>{obj.text}</p>)})}
                </div>
                
                <h4><a target="_blank" href="https://icons8.com/icon/81438/done">Done</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a></h4>
            </div>
        </div>
    );}

export default App;

