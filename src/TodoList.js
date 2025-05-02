import TodoItem from "./TodoItem";

const TodoList = ({todos, onRemove}) => {
    return(
        <div>
            {
                todos.map((todo) => <TodoItem todo={todo} key={todo.id} onRemove={onRemove} />)
            }
        </div>
    );
}

export default TodoList;