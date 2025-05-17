import { useState } from "react"
import { formStyle, inputStyle, btnStyle } from "./styles";

const TodoInput = ({onAdd}) => {
    const [task, setTask] = useState('');
    const handleChange = (event) => {setTask(event.target.value);}
    const handleSubmit = (event) => {
        event.preventDefault();
        if(task === '') return;
        onAdd(task);
        setTask(''); }
    return(
        <form style={formStyle} onSubmit={handleSubmit}>
            <input style={inputStyle} placeholder="タスクを入力"
            type="text" onChange={handleChange} value={task}></input>
            <button style={btnStyle} type="submit">追加</button>
        </form>
    );
}

export default TodoInput;