import InputField from './components/InputField';
import { useState } from 'react';
import { Task } from './Interface';
import TaskList from './components/TaskList';
import './App.css'


const App: React.FC = () => {
  const [task, setTask] = useState<string>("")
  const [allTasks, setAllTasks] = useState<Task[]>([])

  const handleSubmit = (e: React.FormEvent)=>{
    e.preventDefault();
    setTimeout(() => {
      if(task){
        setAllTasks([...allTasks,{id: Date.now(), task, isDone: false}])
      };
      setTask("");
    }, 1000);
  }


  return (
    <>
    <div className='App'>
      <span className='heading'>Task Board</span>
      <InputField
      task={task}
      setTask={setTask}
      handleSubmit={handleSubmit}
      />
      <TaskList
      allTasks={allTasks}
      setAllTasks={setAllTasks}
      />
    </div>
    </>
  )
};

export default App
