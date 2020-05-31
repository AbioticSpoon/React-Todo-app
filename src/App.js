import React from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			todos: [
				{ text: 'fix robot.txt', complete: false, key: 1 },
				{ text: 'clean room', complete: false, key: 2 }
			],
			current: ''
		};

		this.handleInput = this.handleInput.bind(this);
	}

	handleInput = (e) => {
		// console.log(e.target.value);
		const value = e.target.value;
		this.setState({ current: value });
	};

	handleSubmit = () => {
		const { todos, current } = this.state;
		if (this.state.current === '') {
			console.log('empty');
		} else {
			const currentItem = {
				text: current,
				key: Date.now(),
				complete: false
			};
			const updated = [ ...todos, currentItem ];
			this.setState({
				todos: updated,
				current: ''
			});
		}
	};

	handleDelete = (key) => {
		// console.log('deleted');
		// console.log(key);
		const { todos } = this.state;
		const newTodos = todos.filter((todo) => todo.key !== key);
		this.setState({
			todos: newTodos
		});
	};

	handleComplete = (key) => {
		const { todos } = this.state;
		this.setState({
			todos: this.state.todos.map((todo) => {
				if (todo.key === key) {
					return {
						key: todo.key,
						text: todo.text,
						complete: !todo.complete
					};
				} else {
					return todo;
				}
			})
		});
	};

	render() {
		return (
			<div className="App container">
				<TodoList
					todos={this.state.todos}
					handleDelete={this.handleDelete}
					handleComplete={this.handleComplete}
				/>
				<AddTodo handleInput={this.handleInput} handleSubmit={this.handleSubmit} value={this.state.current} />
			</div>
		);
	}
}

export default App;
