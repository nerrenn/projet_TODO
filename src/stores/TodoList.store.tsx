import { action, map } from "nanostores"
import { ChangeEvent } from "react"
/**
 * @module TodoList.store
 *
 * @description
 *  This file contains states and actions of the TodoList screen.
 */

export type Todo = {
    label:string
    done:boolean
}
export type TodoListState = {
    newTodo:string
    todoList: Todo[]
}

export const TodoListStore = map<TodoListState>({
    newTodo:'',
    todoList: [],
})

export const ChangeNewTodo = action(
    TodoListStore,
    'Change new Todo',
    (store, e: ChangeEvent<HTMLInputElement>) => {
        store.setKey('newTodo', e.currentTarget.value)
    },
)

export const addNewTodo = action(
    TodoListStore,
    'add new Todo',
    store => {
        const {newTodo, todoList} = store.get()

        if(!newTodo.length){
            return
        }
        const todo:Todo = {label: newTodo, done:false}
        const newTodoList = [todo, ...todoList]

        store.setKey('todoList', newTodoList)
        store.setKey('newTodo', '')
    }
)

export const toggleTodo = action(
    TodoListStore,
    'toggle a todo',
    (store, index:number) =>{
        const { todoList } = store.get()

        const newTodoList = todoList.map((todo, i) => {
            if(i !== index){
                return todo
            }

            return{
                ...todo,
                done: !todo.done,
            }
        })

        store.setKey('todoList', newTodoList)
    },
)

export const removeTodo = action(
    TodoListStore,
    'remove a todo',
    (store, index:number) => {
        const {todoList} = store.get()

        const newTodoList = todoList.filter((todo, i) => i !== index)

        store.setKey('todoList', newTodoList
        )
    }
)