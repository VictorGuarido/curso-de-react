function Input(props) {
    return (
        <input 
            className="border border-slate-300 outline-sky-400 px-4 py-2 rounded-md"             
            {...props} // Spread de props para permitir que outras propriedades sejam passadas para o input
            
            // Se preferir, pode especificar as props diretamente:
            // value={props.title} 
            // onChange={props.onChange}
            // type={props.type} 
            // placeholder={props.placeholder}

        />
    );
}

export default Input;