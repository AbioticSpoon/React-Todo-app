import React from 'react';

export default function AddTodo(props) {
	const { handleInput, handleSubmit, value } = props;
	return (
		<div className="mt-4">
			<div className="input-group mb-3">
				<input
					type="text"
					className="form-control"
					placeholder="+ Add to list..."
					aria-label="+ Add to list..."
					aria-describedby="basic-addon2"
					onChange={handleInput}
					value={value}
				/>
				<div className="input-group-append">
					<button className="btn btn-outline-secondary" type="button" onClick={handleSubmit}>
						Add
					</button>
				</div>
			</div>
		</div>
	);
}
