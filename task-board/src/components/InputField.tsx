import React from 'react'
import "./styles.css"



interface Props {
    task:string;
    setTask:React.Dispatch<React.SetStateAction<string>>;
    handleSubmit: React.FormEventHandler<HTMLFormElement>;
}
const InputField: React.FC<Props> =({task, setTask,handleSubmit})=> {
  return (
    <div >
        <form className='input' onSubmit={handleSubmit}>
            <input
            className='input__field'
            type='input'
            placeholder='Enter Your Task :)'
            onChange={(e)=>setTask(e.target.value)}
            value={task}
            />
            <button className='input__button' type="submit">
                Sub
            </button>
        </form>
    </div>
  )
}

export default InputField