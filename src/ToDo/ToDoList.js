import ToDoItem from './ToDoItem'

const ToDoList = props => {
	let toDoListContent
	if (props.toDos.length > 0) {
		toDoListContent = (
			<ul>
				{props.toDos.map(todo => (
					<ToDoItem
						key={todo.id}
						id={todo.id}
						todo={todo.task}
						delete={props.del}
						state={todo.completed}
						complete={props.complete}
						edit={props.edit}
					/>
				))}
			</ul>
		)
	} else {
		toDoListContent = <p className='no-items'>There are no ToDo's to show.</p>
	}
	return (
		<div className='todolist'>
			<h2>ToDo List:</h2>
			{toDoListContent}
		</div>
	)
}
export default ToDoList
