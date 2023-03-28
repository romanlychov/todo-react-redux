export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const DONE_TODO = 'DONE_TODO';

export const addTodoTask = (todoTask) => {
    return {
        type: ADD_TODO,
        payload: { todoTask },
    };
}

export const deleteTodoTask = (todoTaskId) => {
    return {
        type: DELETE_TODO,
        payload: { todoTaskId },
    };
}

export const doneTodoTask = (todoTaskId) => {
    return {
        type: DONE_TODO,
        payload: { todoTaskId },
    };
}