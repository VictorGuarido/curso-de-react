import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import {v4} from "uuid"; 
import Title from "./components/Title";
import Bottom from './components/Bottom';

function App() {

    const [tasksS, setTasksState] = useState( // Cria um estado para armazenar as tarefas
        // Inicializa o estado com as tarefas armazenadas no localStorage, se existirem. Se não houver tarefas no localStorage, inicia com um array vazio
        JSON.parse(localStorage.getItem("tasks")) || [] // Tenta recuperar as tarefas do localStorage, se não houver, inicia com um array vazio
        // JSON.parse converte a string do localStorage de volta para um objeto JavaScript
        // || [] garante que, se localStorage.getItem("tasks") retornar null, o estado será um array vazio
        // Isso é útil para evitar erros ao tentar mapear ou filtrar um valor null
    );

    useEffect(() => { // Hook para executar código quando o componente é montado
        localStorage.setItem("tasks", JSON.stringify(tasksS)); // Salva o estado das tarefas no localStorage
    }, [tasksS]); // O array vazio significa que o efeito só será executado uma vez, quando o componente for montado. Porém, se tasksState for passado como dependência, o efeito será executado sempre que tasksState mudar.

    /*
    useEffect(() => {
        async function fetchTasks() {
            // Chamar a API
            const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10', { method: 'GET', });

            // Pegar os dados que a API retornou
            const data = await response.json(); // Pega a resposta da API e converte para JSON

            // Armazena/Persiste esses dados no State
            setTasksState(data)
        }

        fetchTasks(); // Chama a função fetchTasks para buscar as tarefas da API
    }, []); // Quando o segundo parametro é um array vazio, o efeito só será executado UMA VEZ, que é quando o usuario entra na aplicação
    */

    function onTaskClick(taskId) {
        // Cria uma nova lista de tarefas, invertendo o estado de conclusão da tarefa clicada
        const newTasks = tasksS.map(task => {
            // Verifica se o ID da tarefa atual é igual ao ID da tarefa clicada
            if (task.id === taskId) {
                // Inverte o estado de conclusão da tarefa
                return {...task, isCompleted: !task.isCompleted };
            }

            return task;

        });

        setTasksState(newTasks); // Atualiza o estado com as novas tarefas
    }

    function onClickDeleteTask(taskId) {
        const newTasks = tasksS.filter(task => task.id !== taskId); 
        setTasksState(newTasks);
    }

    function onClickAddTask(title, description) {
        const newTask = {
            id: v4(),
            title: title,
            description: description,
            isCompleted: false // Define o estado inicial como não concluído
        }
        setTasksState([...tasksS, newTask]); // A nova lista vai ter, tudo que tinha na lista anterior, mais a nova tarefa definida no newTask
    }

    return (
        <div className="w-screen min-h-screen bg-slate-500 flex justify-center p-6">
            <div className="w-[500px] space-y-4">
                <Title>
                    Gerenciador de Tarefas
                </Title>
                <AddTask 
                    onClickAddTask={onClickAddTask} />
                <Tasks 
                    tasksProps={tasksS}
                    onTaskClick={onTaskClick}
                    onClickDeleteTask={onClickDeleteTask}/>
                
                <Bottom />
            </div>
        </div>
    )

}

export default App;