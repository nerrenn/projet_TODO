import { useStore } from "@nanostores/react"
import {addNewTodo, ChangeNewTodo, removeTodo, TodoListStore, toggleTodo } from "../stores/TodoList.store"
/**
 * Componants to create a list of items you need to buy
 */



export default function TodoList() {
    const {newTodo, todoList} = useStore(TodoListStore)
    return(
        <>
            <h1>Petite courses</h1>
            <input type='text' value={newTodo} onChange={ChangeNewTodo}></input>
            <button  onClick={addNewTodo} className="fa-solid fa-circle-plus"></button>
            <ul>
                {todoList.map((todo, index) => (
                    <li onClick={() => toggleTodo(index)}>
                        {todo.label} ({todo.done ? 'Fait' : 'A Faire'})
                        <button onClick={() => removeTodo(index)}>Supprimer</button>
                </li>
                ))}

            </ul>
        </>
    )
}