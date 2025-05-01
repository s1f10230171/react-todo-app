import TodoItem from "./TodoItem";

const TodoList = (props) => {
    return(
        <div>
            {
                props.todos.map((todo) => <TodoItem todo={todo} />)
            }
        </div>
    );
}

export default TodoList;