import TodoList from "./TodoList"

const TodoItem = (props) => {
    const itemStyle = {
        display: 'flex', alignItems: 'center',
        padding: 10, 
        borderTop: '1px soild #dee2e6'
    }
    const checkboxStyle = {cusor: 'pointer'}
    const textStyle = {
        flex:1, marginLeft: 10,
        textDecoration: props.todo.isFinished ? 'line-through' : 'none'
    }
    const btnStyle = {cusor: 'pointer'}
    return(
        <div style={itemStyle}>
            <input style={checkboxStyle} type="checkbox" checked={props.todo.isFinished} ></input>
            <div style={textStyle}>{props.todo.text}</div>
            <button style={btnStyle}>削除</button>
        </div>
    );
}

export default TodoItem;