import React from 'react'
import { Titulo } from './style'

export const Cadastrar = () => {
    return (
        <div>
            <Titulo>Cadastrar</Titulo>

            <form>
                <label>Título: </label>
                <input type="text" name="titulo" placeholder="Título do produto" /><br /><br />
                <label>Descrição:</label>
                <input type="text" name="descricao" placeholder="Descrição do produto" /><br /><br />
                <button type="button">Cadastrar</button>
            </form>
        </div>
    )
}