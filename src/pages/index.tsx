import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {

  const clientes =[
    new Cliente('João', 27, '1'),
    new Cliente('Ana', 28, '2'),
    new Cliente('Maria', 42, '3'),
    new Cliente('Luana', 37, '4'),
  ]

  function clienteSelecionado(cliente: Cliente){
    console.log(cliente.nome)
  }
  function clienteExcluido(cliente: Cliente){
    console.log(`Excluido...${cliente.nome}`)
  }
  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout titulo="Cadastro Simples"> 
        <Tabela 
        clientes={clientes} 
        clienteSelecionado ={clienteSelecionado}
        clienteExcluido ={clienteExcluido}
        />
      </Layout>
    </div>
  )
}








{/* <div className={`
flex h-screen justify-center items-center bg-gradient-to-r from-purple-900 via-green-400 to-blue-400
`}>
  <span className="text-6xl">Texto</span> */}
