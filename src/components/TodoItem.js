// import TodoList from "./TodoList"
import { itemStyle, checkboxStyle, textStyle, btnStyle } from "./styles";

const TodoItem = ({todo, onRemove, onToggle}) => {
    const textStyleWithLine = {
        ...textStyle,
        textDecoration: todo.isFinished ? 'line-through' : 'none'
    }
    return(
        <div style={itemStyle}>
            <input style={checkboxStyle} type="checkbox" defaultChecked={todo.isFinished && true} onChange={() => onToggle(todo.id)} ></input>
            <div style={textStyleWithLine}>{todo.text}</div>
            <button style={btnStyle} onClick={() => onRemove(todo.id)} >削除</button>
        </div>
    );
}

export default TodoItem;