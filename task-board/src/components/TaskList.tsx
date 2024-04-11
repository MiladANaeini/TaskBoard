import "./styles.css"
import { Task } from '../Interface';

interface Props {
  allTasks: Task[],
  setAllTasks:React.Dispatch<React.SetStateAction<Task[]>>
}

const TaskList:React.FC<Props> = ({allTasks, setAllTasks}) => {
  return (
    <div className="tasks">
        {allTasks &&
      allTasks.map((item,key)=>(
        <div key={key}>
        {item.task}<br/>
        </div>
      ))}
    </div>
  )
}

export default TaskList