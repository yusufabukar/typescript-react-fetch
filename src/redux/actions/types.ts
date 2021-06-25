import { DeleteToDoAction, FetchToDosAction } from './toDos';

export enum ActionTypes {
	fetchToDos,
	deleteToDo
};

export type Action = FetchToDosAction | DeleteToDoAction;