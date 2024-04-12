import "./styles.css"
import { Task } from '../Interface';
import TaskCard from "./TaskCard";

interface Props {
  allTasks: Task[],
  setAllTasks:React.Dispatch<React.SetStateAction<Task[]>>
}

const TaskList:React.FC<Props> = ({allTasks, setAllTasks}) => {
  return (
    <div className="taskCard">
        {allTasks &&
      allTasks.map((item)=>(
        <div >
        <TaskCard
        item={item}
        allTasks={allTasks}
        setAllTasks={setAllTasks}
        id={item.id}
        />
        </div>
      ))}
    </div>
  )
}

export default TaskList