import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as id } from 'uuid';
import { addTodoTask } from '../../store/actions/actions';
import TodoElement from '../TodoElement/TodoElement';

const TodoList = () => {

    const dispatch = useDispatch();

    const [todoInput, setTodoInput] = useState('');

    const handleChange = (e) => {
        setTodoInput(e.target.value);
    }

    const handleAddTodo = (e) => {
        e.preventDefault();
        if (todoInput) {
            const newTodoTask = {
                title: todoInput,
                id: id(),
                done: false,
            }
            dispatch(addTodoTask(newTodoTask))
            setTodoInput('');
        }
    }

    return (
        <main>
            <h1>TODO List</h1>
            <form>
                <input name='addTask' placeholder='Add new task' type='text'
                    value={todoInput} onChange={handleChange} />
                <button onClick={handleAddTodo}>Add task</button>
            </form>
            <TodoElement />
        </main>
    );
}

export default TodoList;