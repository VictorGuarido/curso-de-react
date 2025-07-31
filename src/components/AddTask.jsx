import { useState } from "react"; // Importa o hook useState do React para gerenciar o estado do componente
import Input from "./Input";

function AddTask({onClickAddTask}) {

    const [title, setTitle] = useState("");// State para armazenar o título da tarefa, com o padrão vazio
    const [description, setDescription] = useState(""); // State para armazenar a descrição da tarefa, com o padrão vazio

    return (
        <div className="space-y-2 p-6 bg-slate-200 rounded-md shadow-2xl flex flex-col">
            <Input 
                value={title} 
                onChange={(event)=> setTitle(event.target.value)} // Atualiza o título da tarefa conforme o usuário digita
                type="text" 
                placeholder="Digite o titulo da tarefa"/>

            <Input 
                value={description}
                onChange={(event)=> setDescription(event.target.value)}
                type="text" 
                placeholder="Digite o descrição da tarefa"/>            

            <button 
                onClick={() => {
                    if (!title.trim() || !description.trim()) { // Verifica se o título ou a descrição estão vazios ou com espaços em branco
                        return alert("Preencha o título e a descrição da tarefa!"); // Exibe um alerta se o título ou a descrição estiverem vazios
                    }
                    onClickAddTask(title, description); // Chama a função onClickAddTask passando o título e a descrição
                    setDescription(""); // Limpa o campo de descrição após adicionar a tarefa
                    setTitle(""); // Limpa o campo de título após adicionar a tarefa
                } } // Chama a função onClickAddTask passando o título e a descrição quando o botão é clicado
                className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium">
                Adicionar
            </button>
        </div>
    );
}

export default AddTask;