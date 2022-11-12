import React, { useState, useEffect } from 'react'
import Header from './Header'
import ToDoList from './ToDo/ToDoList'
function App() {
	const [toDos, setToDos] = useState([])

	useEffect(() => {
		const json = localStorage.getItem('toDos')
		const loadedToDos = JSON.parse(json)
		if (loadedToDos) {
			setToDos(loadedToDos)
		}
	}, [])

	useEffect(() => {
		const json = JSON.stringify(toDos)
		localStorage.setItem('toDos', json)
	}, [toDos])

	const addToDosHandler = todo => {
		setToDos(prevState => {
			return [todo, ...prevState]
		})
	}

	const toggleCompleteHandler = id => {
		const completedToDos = [...toDos].map(todo => {
			if (todo.id === id) {
				todo.completed = !todo.completed
			}
			return todo
		})
		setToDos(completedToDos)
	}

	const editToDoHandler = (id, newToDo) => {
		const edditedToDos = [...toDos].map(todo => {
			if (todo.id === id) {
				todo.task = newToDo
			}
			return todo
		})
		setToDos(edditedToDos)
	}

	const deleteToDoHandler = id => {
		const newToDoList = toDos.filter(todo => todo.id !== id)
		setToDos(newToDoList)
	}

	return (
		<div className='todo'>
			<Header newToDo={addToDosHandler} />
			<ToDoList
				toDos={toDos}
				del={deleteToDoHandler}
				state={toDos.complete}
				complete={toggleCompleteHandler}
				edit={editToDoHandler}
			/>
		</div>
	)
}

export default App
