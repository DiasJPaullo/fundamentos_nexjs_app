export default function RenderizarCabecalho(props){
  return(
    function renderizarCabecalho() {
      return (
        <tr>
          <th className="text-left p-4">Código</th>
          <th className="text-left p-4">Nome</th>
          <th className="text-left p-4">Idade</th>
          <th className="p-4">Ações</th>
          
        </tr>
      )
    }
  )
}


