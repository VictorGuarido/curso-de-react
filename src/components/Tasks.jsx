import { CheckIcon, ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks({tasksProps, onTaskClick, onClickDeleteTask}) {
    const navigate = useNavigate(); // Hook para navegação programática

    function onClickSeeTaskDesc(task) {
        const query = new URLSearchParams(); // Cria um objeto URLSearchParams para manipular os parâmetros da URL
        query.set("title", task.title); // Define o parâmetro "title" com o título da tarefa
        query.set("description", task.description); // Define o parâmetro "description" com a descrição da tarefa
        navigate(`/task-desc?${query.toString()}`); // Navega para a página de descrição da tarefa com os parâmetros
    }

    return(
        <ul className="space-y-2 p-6 bg-slate-200 rounded-md shadow-2xl">
            {tasksProps.map((task) => (
                <li key={task.id} className="flex gap-2">
                    {/* Adiciona uma classe condicional para riscar o texto se a tarefa estiver concluída */}
                    <button 
                        onClick={() => onTaskClick(task.id)}
                        className={`${task.isCompleted && 'line-through'} flex items-center gap-2 bg-slate-400 text-left w-full text-white p-2 rounded-md`}>
                        
                        {/* {task.isCompleted ? '✅ ' : '❌ '} */}
                        {task.isCompleted && <CheckIcon />}
                        {task.title}
                    </button>
                    
                    <Button
                        onClick={ () => onClickSeeTaskDesc(task) } >

                        <ChevronRightIcon />
                    </Button>

                    <Button
                        onClick={ () => onClickDeleteTask(task.id) }>

                        <TrashIcon />
                    </Button>
                </li>
            ))}  
        </ul>
    );
}

export default Tasks;