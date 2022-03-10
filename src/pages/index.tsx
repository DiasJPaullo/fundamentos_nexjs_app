import { useState } from "react";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  const clientes =[
    new Cliente('João', 27, '1'),
    new Cliente('Ana', 28, '2'),
    new Cliente('Maria', 42, '3'),
    new Cliente('Luana', 37, '4'),
  ]

  function clienteSelecionado(cliente: Cliente){
    setCliente(cliente)
    setVisivel('form')
  }
  function clienteExcluido(cliente: Cliente){
    console.log(`Excluido...${cliente.nome}`)
  }
  function novoCliente(){
    setCliente(Cliente.vazio())
    setVisivel('form')
  }
  function salvarCliente(cliente: Cliente){
    console.log(cliente)
    setVisivel('tabela')
  }


  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout titulo="Cadastro Simples"> 
      {visivel === 'tabela' ? (
        <>
          <div className="flex justify-end">
            <Botao 
            cor="green" 
            className="mb-4"
            onClick={novoCliente}
            >
              Novo Cliente
            </Botao>
          </div>
          <Tabela 
          clientes={clientes} 
          clienteSelecionado ={clienteSelecionado}
          clienteExcluido ={clienteExcluido}
          />
        </>
      ) : (
          <Formulario 
          cliente={cliente} 
          clienteMudou={salvarCliente}
          cancelado={() => setVisivel('tabela')} ></Formulario>
      )}
      
        
      </Layout>
    </div>
  )
}








{/* <div className={`
flex h-screen justify-center items-center bg-gradient-to-r from-purple-900 via-green-400 to-blue-400
`}>
  <span className="text-6xl">Texto</span> */}
