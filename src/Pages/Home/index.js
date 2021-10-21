import React, { useEffect, useState } from 'react'
import { Table, Titulo } from './style'

export const Home = () => {

    // constante que recebe os dados
    const [data, setData] = useState([])

    const getProdutos = async () => {
        fetch('http://localhost/api-crud/index.php')
            .then((response) => response.json())
            .then((responseJson) => (
                //  console.log(responseJson)
                setData(responseJson.records)
            ))
    }

    useEffect(() => {
        getProdutos()
    }, [])

    return (
        <div>
            <Titulo>Listar Produtos</Titulo>
            <Table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Título</th>
                        <th>Descrição</th>
                        <th>Ações</th>
                    </tr>
                </thead>

                <tbody>
                    {Object.values(data).map(produto => (
                        <tr key={produto.id}>
                            <td>{produto.id}</td>
                            <td>{produto.titulo}</td>
                            <td>{produto.descricao}</td>
                            <td>Visualizar Editar Apagar</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}
