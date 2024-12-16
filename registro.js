// Preços dos serviços
let precosServicos = {
    corte: 50,
    manicure: 30,
    Barba: 40,
    Depilacao : 30
};
// Atualiza automaticamente o valor do serviço no formulário de pagamento
document.getElementById('servicoPago').addEventListener('change', function() {
    const servicoSelecionado = document.getElementById('servicoPago').value;
    const valorServico = precosServicos[servicoSelecionado];
    document.getElementById('valorPago').value = `R$ ${valorServico}`;
});
// validar registro
document.getElementById("registrarServico").addEventListener("click", function(){
    const nomeCliente = document.getElementById("nomeCliente").value;
    const formaPagamento = document.getElementById("formaPagamento").value;
    const servico = document.getElementById("servico").value;
    const data = document.getElementById("data").value;
    const horaInicio = document.getElementById("horaInicio").value;
    const horaFinal = document.getElementById("horaFinal").value;
   const produtosUtilizados = document.getElementById('produtosUtilizados').value;
    const profissional = document.getElementById("profissional").value;
    if (nomeCliente && servico ) {
        alert(`Serviço registrado com sucesso! 
Cliente: ${nomeCliente}
Serviço: ${servico}
Data: ${data}
Hora: ${horaInicio} - ${horaFinal}
Profissional: ${profissional}
produtosUtilizados: ${produtosUtilizados}`);
    } else {
        alert("Preencha os campos obrigatórios.");
    }
});