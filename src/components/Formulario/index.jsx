import { useState, useEffect } from "react";

const Formulario = () => {
    const [ materiaA, setMateriaA ] = useState(0);
    const [ materiaB, setMateriaB ] = useState(0);
    const [ materiaC, setMateriaC ] = useState(0);
    const [ nome, setNome ] = useState("");

    // Mount -> quando ele é montanto
    // Updatr -> quando ele é atualizado
    // OnMount -> quando ele é desmontado

    useEffect(() => {
        console.log("O componente iniciou");
    }, []); // somente o componente for inicializado(executado)

    useEffect(() => {
        console.log("O componente iniciou1");

        return () => {
            console.log("O componente finalizou");
        }
    }, []); // somente é executado quando o componente é desmontado(finalizado)

    useEffect(() => {
        console.log("O estado mudou");
    }, [nome]); // ele somente vai apresentar o console.log quando o nome for alterado

    useEffect(() => {
        console.log("O estado mudou");
    }, [materiaA, materiaB, materiaC]);
    
    const alteraNome = (evento) => {
        setNome(evento.target.value);
    }
    
    function aprovado() {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;
        
        if (media >= 6) {
            return ( <p>Aluno {nome}, aprovado com média: {media}</p> );
        }
        return ( <p>Aluno {nome}, reprovado com média: {media}</p> );
    }

    return (
        <form action="">
            <ul>
                {[1, 2, 3, 4, 5].map( (item, index) => (
                    <li key={item}>[{index}]{item}</li>
                ))}
            </ul>
            <input type="text" placeholder="Seu nome" onChange={ alteraNome } />
            <input type="number" placeholder="Nota matéria A" onChange={ ({ target }) => 
                setMateriaA(parseInt(target.value)) } />
            <input type="number" placeholder="Nota matéria B" onChange={ evento => 
                setMateriaB(parseInt(evento.target.value)) } />
            <input type="number" placeholder="Nota matéria C" onChange={ evento => 
                setMateriaC(parseInt(evento.target.value)) } />

            { aprovado() }

        </form>
    );
}

export default Formulario;