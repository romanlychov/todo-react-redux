import { ADD_TODO, DELETE_TODO, DONE_TODO } from '../actions/actions';

const defaultState = {
    todoList: [
        {
            title: "Smth very important",
            id: 1,
            done: false,
        },
        {
            title: "Another very important thing",
            id: 2,
            done: false,
        },
        {
            title: "Ordinary thing",
            id: 3,
            done: true,
        },
    ]
};

export const todoReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todoList: [
                    ...state.todoList,
                    action.payload.todoTask,
                ],
            };
        case DELETE_TODO:
            return {
                ...state,
                todoList: state.todoList.filter(item => item.id !== action.payload.todoTaskId),
            };
        case DONE_TODO:
            return {
                ...state,
                todoList: state.todoList.map(item => {
                    if (item.id === action.payload.todoTaskId) {
                        return {
                            ...item,
                            done: !item.done,
                        }
                    }
                    return item;
                }),
            };
        default:
            return state;
    }
};