import ReactDOM from 'react-dom'
import React, { useState } from 'react'
let content
const Backdrop = props => {
	return <div className='backdrop' onClick={props.closePopup}></div>
}
const PopupError = props => {
	return (
		<div className='popup'>
			<header className='popup__header'>
				<h3>{props.popupTitle}</h3>
			</header>
			<div className='popup__msg'>
				<p>Cannot add empty record!</p>
			</div>
			<footer className='popup__actions'>
				<button className='popup__btn' onClick={props.closePopup}>
					Close
				</button>
			</footer>
		</div>
	)
}
const PopupEdit = props => {
	const [todo, editTodo] = useState(props.val)

	const updateStateHandler = e => {
		editTodo(e.target.value)
	}

	const editToDo = () => {
		if (todo.trim().length === 0) {
			return
		} else {
			props.edit(props.id, todo)
			props.closePopup()
		}
	}
	const inputSubmitHandler = e => {
		e.key === `Enter` && editToDo()
	}

	return (
		<div className='popup'>
			<header className='popup__header'>
				<h3>{props.popupTitle}</h3>
			</header>
			<div className='popup__msg'>
				<input className='popup__input' value={todo} onChange={updateStateHandler} onKeyUp={inputSubmitHandler} />
			</div>
			<footer className='popup__actions'>
				<button className='popup__btn' onClick={props.closePopup}>
					Close
				</button>
				<button className='popup__btn' onClick={editToDo}>
					Save
				</button>
			</footer>
		</div>
	)
}

const Modal = props => {
	props.type
		? (content = <PopupError popupTitle={props.popupTitle} closePopup={props.closePopup} />)
		: (content = (
				<PopupEdit
					popupTitle={props.popupTitle}
					closePopup={props.closePopup}
					id={props.id}
					edit={props.edit}
					val={props.val}
				/>
		  ))
	return (
		<React.Fragment>
			{ReactDOM.createPortal(<Backdrop closePopup={props.closePopup} />, document.getElementById('backdrop-root'))}

			{ReactDOM.createPortal(content, document.getElementById('popup-root'))}
		</React.Fragment>
	)
}
export default Modal
