import { Task } from '../Interface';
import {AiFillEdit,AiFillDelete} from 'react-icons/ai'
import {MdDone} from 'react-icons/md'
import './styles.css'
import React, { useState } from 'react';

interface Props {
    item: Task,
    allTasks: Task[],
    setAllTasks: React.Dispatch<React.SetStateAction<Task[]>>,
    id:number
}

const TaskCard:React.FC<Props> = ({item,allTasks,setAllTasks,id})=>{
    const[ isDone, setIsDone]= useState<boolean>(false);
    const[ editing, setEditing]= useState<boolean>(false);
    const[ editText, setEditText]= useState<string>("");

    const handleDone =(id:number)=>{
        const theTask = allTasks.find((task)=> task?.id == id);
        if(theTask){
            setIsDone(true)
        }
    };

    const handleDelete =(id:number)=>{
      setAllTasks(allTasks.filter((task)=> task.id !== id))      
    };

    const handleEdit = (e:React.FormEvent,id:number) => {
     e.preventDefault()
     setAllTasks(allTasks.map((kir)=>{
        if(kir.id === id){
          return  {...kir, task:editText}
        } else {
            return kir;
        }
    }))

     setEditing(false)
      }

    return (
        <form className='taskCard__single' onSubmit={(e)=>handleEdit(e,id)}>
            {editing && !isDone ? (
             <div>
            <input
            type='input'
            onChange={(e)=> setEditText(e.target.value)}
            value={editText}
            />
            <button type='submit'>Sub</button>
            </div>
            ) : (
            <span className='taskCard__single--text'>
         {item.task}
         </span>

            )}
         <div>
            <span className="icon" onClick={()=>{setEditing(true);setEditText(item.task)}}>
                <AiFillEdit/>
            </span>
            <span className="icon" onClick={()=> handleDelete(id)}>
                <AiFillDelete/>
            </span>
            {!isDone && 
            <span className="icon" onClick={()=> handleDone(id)}>
                <MdDone/>
            </span>
            }
            {isDone && 
            <span><br/>
                Task is Done
            </span>
            }
         </div>
        </form>
    )
}

export default TaskCard;