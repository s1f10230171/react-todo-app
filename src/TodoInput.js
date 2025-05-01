import { useState } from "react"

const TodoInput = ({onAdd}) => {
    const formStyle = {
        display: 'flex',
    }
    const inputStyle = {
        backgroundColor: 'darkgrey', border: 'none',
        outline: 'none', fontSize: 16, color: 'white',
        lineHeight: 2, flex: 1 
    }
    const btnStyle = {
        backgroundColor: 'dimgrey', border: 'none',
        color: 'white', fontSize: 16, cusor: 'pointer', 
        paddingLeft: 15, paddingRight: 15
    }

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