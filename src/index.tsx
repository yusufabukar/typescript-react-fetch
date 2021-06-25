import React from 'react';
import ReactDOM from 'react-dom';

interface AppProps {
	colour: string;
};

interface AppState {
	counter: number;
};

class App extends React.Component<AppProps, AppState> {
	constructor(props: AppProps) {
		super(props);

		this.state = {
			counter: 0
		};
	};

	onIncrement = (): void => {
		this.setState({counter: this.state.counter + 1});
	};

	onDecrement = (): void => {
		this.setState({counter: this.state.counter - 1})
	};

	render() {
		return (
			<>
				<h1>Counter</h1>
					<button onClick={this.onIncrement}>Increment</button>
					{this.state.counter}
					<button onClick={this.onDecrement}>Decrement</button>
			</>
		);
	};
};

ReactDOM.render(<App colour='Green' />, document.getElementById('root'));