import { combineReducers } from 'redux';
import { ToDo } from '../actions';
import { toDosReducer } from './toDosReducer';

export interface StoreState {
	toDos: ToDo[];
};

const rootReducer = combineReducers<StoreState>({
	toDos: toDosReducer
});

export default rootReducer;