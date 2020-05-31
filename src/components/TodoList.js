import React from 'react';

export default function TodoList(props) {
	const { todos, handleDelete, handleComplete } = props;

	return (
		<div className="card mt-4 pt-2">
			<div className="card-body">
				<h5 className="card-title text-center text-uppercase">Todo List</h5>
			</div>
			{todos.map((todo) => {
				return (
					<div className="px-3">
						<div className="input-group mb-3">
							<div className="input-group-prepend">
								<div className="input-group-text">
									<input
										type="checkbox"
										aria-label="Checkbox for following text input"
										onClick={() => handleComplete(todo.key)}
									/>
								</div>
							</div>
							{!todo.complete ? (
								<p className="todo-txt text-capitalize form-control">{todo.text}</p>
							) : (
								<p className="todo-txt text-capitalize form-control text-muted">
									<del>{todo.text}</del>
								</p>
							)}

							<div className="input-group-append">
								<button
									className="btn btn-outline-secondary"
									type="button"
									id="button-addon2"
									onClick={() => handleDelete(todo.key)}
								>
									x
								</button>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}
