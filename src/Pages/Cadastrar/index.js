import React, { useState } from 'react'
import { Titulo } from './style'

export const Cadastrar = () => {

    const [produto, setProduto] = useState({
        titulo: '',
        descricao: ''
    })
    const valorInput = e => setProduto({...produto, [e.target.name]: e.target.value }) 

    const cadProduto = async e =>  {
        e.preventDefault()
        console.log(produto.titulo)
    }

    return (
        <div>
            <Titulo>Cadastrar</Titulo>

            <form onSubmit={cadProduto}>
                <label>Título: </label>
                <input type="text" name="titulo" placeholder="Título do produto" onChange={valorInput}/><br /><br />
                <label>Descrição:</label>
                <input type="text" name="descricao" placeholder="Descrição do produto" onChange={valorInput} /><br /><br />
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    )
}