import React, {useState} from 'react'

export default function Ano() {

    const [nascimento, setNascimento] = useState("");
    const [mesNascimento, setMesNascimento] = useState("1");

    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();
    const mesAtual = dataAtual.getMonth() + 1;


    const calcular = () => {
        const idade = anoAtual - nascimento;
    

    if (parseFloat(mesNascimento) === mesAtual){
      alert(`Você tem, ${idade} anos e faz aniversario esse mês.`);
    } else if (parseFloat(mesNascimento) < mesAtual){
      alert(`Você ainda tem ${idade - 1} anos.`);
    } else {
      alert(`Você tem ${idade} anos.`);
    }
  };

  return (
    <div>
        <h3>Somador</h3>
        <input type='number'
        value={nascimento}
        onChange={(e) => setNascimento(e.target.value)}
        placeholder='Digite o seu ano de nascimento'
        />
<br /><br />
        <select 
        onChange={(e) => setMesNascimento(e.target.value)}
        value={mesNascimento}  
        >
          <option value="1">Janeiro</option>
          <option value="2">Fevereiro</option>
          <option value="3">Março</option>
          <option value="4">Abril</option>
          <option value="5">Maio</option>
          <option value="6">Junho</option>
          <option value="7">Julho</option>
          <option value="8">Agosto</option>
          <option value="9">Setembro</option>
          <option value="10">Outubo</option>
          <option value="11">Novembro</option>
          <option value="12">Dezembro</option>

        </select>
        <br /><br />
        <button onClick={calcular}>Calcular Idade</button>
    </div>
  )
}
