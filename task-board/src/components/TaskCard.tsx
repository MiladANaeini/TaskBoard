import { Task } from '../Interface';
import {AiFillEdit,AiFillDelete} from 'react-icons/ai'
import {MdDone} from 'react-icons/md'
import './styles.css'

interface Props {
    item: Task,
    allTasks: Task[],
    setAllTasks: React.Dispatch<React.SetStateAction<Task[]>>,
    id:number
}

const TaskCard:React.FC<Props> = ({item,allTasks,setAllTasks,id})=>{
    return (
        <form className='taskCard__single'>
            <span className='taskCard__single--text'>
         {item.task}
         </span>
         <div>
            <span className="icon">
                <AiFillEdit/>
            </span>
            <span className="icon">
                <AiFillDelete/>
            </span>
            <span className="icon">
                <MdDone/>
            </span>
         </div>
        </form>
    )
}

export default TaskCard;