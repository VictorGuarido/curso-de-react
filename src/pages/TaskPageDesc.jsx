import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../components/Title";

function TaskPageDesc() {

    const [searchParams] = useSearchParams(); // Hook para acessar os parâmetros da URL, se necessário
    const title = searchParams.get("title"); // Obtém o parâmetro "title" da URL
    const description = searchParams.get("description"); // Obtém o parâmetro "description" da URL
    const navigate = useNavigate(); // Hook para navegação, se necessário

    return (
        <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
            <div className="w-[500px] mx-auto space-y-4">
                <div className="flex justify-center relative mb-6"> {/* Itens aqui serão alinhados horizontalmente ao centro */}

                    <button 
                        onClick={ () => navigate(-1) }
                        //onClick={ () => navigate('/') }
                        className="absolute left-0 top-0 bottom-0 text-slate-100">
                            
                        <ChevronLeftIcon />
                    </button>

                    <Title>
                        Detalhes da Tarefa
                    </Title>
                </div>

                <div className="bg-slate-200 p-4 rounded-md shadow-md">
                    <h2 className="text-xl font-semibold text-slate-600">Título:</h2>
                    <p className="text-slate-700">{title}</p>
                    
                    <h2 className="text-xl font-semibold text-slate-600">Descrição:</h2>
                    <p className="text-slate-700">{description}</p>
                </div>
            </div>
        </div>
    );

}

export default TaskPageDesc;