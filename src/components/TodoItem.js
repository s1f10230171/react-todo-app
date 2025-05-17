// import TodoList from "./TodoList"

const TodoItem = ({todo, onRemove, onToggle}) => {
    const itemStyle = {
        display: 'flex', alignItems: 'center',
        padding: 10, 
        borderTop: '1px solid #dee2e6'
    }
    const checkboxStyle = {cursor: 'pointer'}
    const textStyle = {
        flex:1, marginLeft: 10,
        textDecoration: todo.isFinished ? 'line-through' : 'none'
    }
    const btnStyle = {cursor: 'pointer'}
    return(
        <div style={itemStyle}>
            <input style={checkboxStyle} type="checkbox" defaultChecked={todo.isFinished && true} onChange={() => onToggle(todo.id)} ></input>
            <div style={textStyle}>{todo.text}</div>
            <button style={btnStyle} onClick={() => onRemove(todo.id)} >削除</button>
        </div>
    );
}

export default TodoItem;