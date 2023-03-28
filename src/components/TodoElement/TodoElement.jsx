import { useDispatch, useSelector } from "react-redux";
import { deleteTodoTask, doneTodoTask } from "../../store/actions/actions";
import style from './TodoElement.module.css';

const TodoElement = () => {

    const dispatch = useDispatch();
    const todolist = useSelector(state => state.todoList);


    const handleChangeDone = (id) => {
        dispatch(doneTodoTask(id))
    }

    const handleDelete = (id) => {
        dispatch(deleteTodoTask(id));
    }

    return (
        <div>
            {todolist.map(item => {
                return (
                    <div className={style.container}>
                        <article key={item.id}
                            onClick={() => handleChangeDone(item.id)}
                            className={item.done ? style.completed : ''}
                        >
                            {item.title}
                        </article>
                        <button onClick={() => handleDelete(item.id)}>Delete</button>
                    </div>
                );
            })}
        </div>
    );
}

export default TodoElement;