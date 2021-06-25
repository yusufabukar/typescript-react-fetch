import React from 'react';
import { connect } from 'react-redux';
import { ToDo, fetchToDos, deleteToDo } from './redux/actions';
import { StoreState } from './redux/reducers/rootReducer';

interface AppProps {
	toDos: ToDo[];
	fetchToDos: Function; // Redux Thunk incompatibility
	deleteToDo: typeof deleteToDo;
};

interface AppState {
	loading: boolean;
};

class App extends React.Component<AppProps, AppState> {
	constructor(props: AppProps) {
		super(props);
		
		this.state = {
			loading: false
		};
	};

	componentDidUpdate(prevProps: AppProps): void {
		if (!prevProps.toDos.length && this.props.toDos.length) {
			this.setState({loading: false});
		};
	};

	onFetch = (): void => {
		this.props.fetchToDos();
		this.setState({loading: true});
	};

	onDelete = (id: number): void => {
		this.props.deleteToDo(id);
	};

	renderList = (): JSX.Element[] => {
		return this.props.toDos.map((toDo: ToDo) => {
			return <li key={toDo.id} onClick={() => this.onDelete(toDo.id)}>{toDo.title}</li>
		});
	};

	render() {
		console.log(this.props.toDos);
		return (
			<>
				<button onClick={this.onFetch}>Fetch</button>
				{this.state.loading ? 'LOADING' : null}
				<ol>
					{this.renderList()}
				</ol>
			</>
		);
	};
};

const mapStateToProps = ({ toDos }: StoreState) => ({ toDos });

// const mapDispatchToProps = () => ({
// 	fetchToDos,
// 	deleteToDo
// });

export default connect(mapStateToProps, {fetchToDos, deleteToDo})(App);