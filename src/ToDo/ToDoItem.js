import React, { useState } from 'react'
import Modal from '../Modal/Modal'
const ToDoItem = props => {
	let toDoState
	const [popup, showPopup] = useState(undefined)

	if (props.state) {
		toDoState = 'completed'
	} else {
		toDoState = ''
	}
	const closePopupHandler = () => {
		showPopup(undefined)
	}
	const editToDoHandler = () => {
		showPopup({
			title: 'Edit ToDo',
			type: false,
			show: true,
		})
	}

	return (
		<React.Fragment>
			{popup && (
				<Modal
					popupTitle={popup.title}
					closePopup={closePopupHandler}
					type={popup.type}
					edit={props.edit}
					id={props.id}
					val={props.todo}
				/>
			)}
			<li className={toDoState}>
				<p>{props.todo}</p>
				<div className='todolist__tools'>
					<button className='complete' onClick={() => props.complete(props.id)}>
						✓
					</button>
					{/* props.edit(props.id, 'gej')  editToDoHandler*/}
					<button className='edit' disabled={props.state} onClick={editToDoHandler}>
						📝
					</button>
					<button className='delete' onClick={() => props.delete(props.id)}>
						✕
					</button>
				</div>
			</li>
		</React.Fragment>
	)
}

export default ToDoItem
