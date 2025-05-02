import TodoItem from "./TodoItem";

const TodoList = ({todos, onRemove, onToggle}) => {
    return(
        <div>
            {
                todos.map((todo) => <TodoItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle} />)
            }
        </div>
    );
}

export default TodoList;