import React, { useRef, useState } from 'react'
import Modal from './Modal/Modal'
const Header = props => {
	const inputToDoRef = useRef()
	const [popup, showPopup] = useState(undefined)

	const closePopupHandler = () => {
		showPopup(undefined)
	}
	const newToDoHandler = e => {
		e.preventDefault()
		if (inputToDoRef.current.value.trim().length === 0) {
			return showPopup({
				title: 'Empty field',
				type: true,
				show: true,
			})
		} else {
			props.newToDo({
				task: inputToDoRef.current.value,
				id: new Date().getTime(),
				completed: false,
			})
			inputToDoRef.current.value = ''
		}
	}
	return (
		<React.Fragment>
			{popup && <Modal popupTitle={popup.title} closePopup={closePopupHandler} type={popup.type} />}
			<div className='header'>
				<h1>ToDo List</h1>
				<form onSubmit={newToDoHandler}>
					<input
						type='text'
						className='header__input'
						ref={inputToDoRef}
						placeholder='Input your ToDo...'
						maxLength='60'
					/>
					<button className='header__btn'>Add</button>
				</form>
			</div>
		</React.Fragment>
	)
}
export default Header
