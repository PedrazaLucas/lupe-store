import { filter } from '@chakra-ui/react'
import {useState} from 'react'

const TaskFilter = () => {

    const [task,setTask] = useState([
        {id: 1, title: "Tarea1", completed: false},
        {id: 2, title: "Tarea2", completed: true},
        {id: 3, title: "Tarea3", completed: false},
    ])

    const [filter, setFilter] = useState("all")

const handleFilterChange = (event)=>{
    setFilter(event.target.value)
}

const handleTaskChange = (taskId) =>{
    setTask((prevTask)=>{
        prevTask.map((rask)=>{
            task.id===taskId? {...task, completed: !task.completed} : task
        })
    })
}

const filteredTask = task.filter((task)=>{
    if(filter==="all") return true
    if(filter==="completed") return task.completed
    if(filter==="uncompleted") return !task.completed
    return false
})


  return (
    <div>
        <h1>Lista de tateas</h1>
        <div>
            <label>filtrar por estado</label>
            <select value={filter} onChange={handleFilterChange}>
                <option value="all">Todas </option>
                <option value="completed">completadas </option>
                <option value="uncompleted">No completadas </option>
            </select>
        </div>
        <div>
            {
                filteredTask.map((t)=>(
                    <div key={t.id}>
                    <input type="checkbox" checked={t.completed} 
                    onChange={()=>handleTaskChange(t.id)}/>
                    <span>{t.title}</span>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default TaskFilter