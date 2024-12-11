
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
    const data = document.getElementById("data").value;
    const horaInicio = document.getElementById("horaInicio").value;
    const horaFinal = document.getElementById("horaFinal").value;
    const servicoPago = document.getElementById("servicoPago").value;
   const produtosUtilizados = document.getElementById('produtosUtilizados').value;
    const profissional = document.getElementById("profissional").value;
    const desconto = parseFloat(document.getElementById("desconto").value) || 0;
    
    if (nomeCliente && data && horaInicio && horaFinal && servicoPago && produtosUtilizados && profissional ) { 
            const valorServico = precosServicos[servicoPago];
            const valorComDesconto = valorServico - (valorServico) * (desconto / 100);

        alert(`Serviço registrado com sucesso! 
Cliente: ${nomeCliente}
Serviço: ${servicoPago}
Data: ${data}
Hora: ${horaInicio} - ${horaFinal}
Profissional: ${profissional}
produtosUtilizados: ${produtosUtilizados}
Valor Original: R$ ${valorServico.toFixed(2)}
Desconto Aplicado: ${desconto}%
Valor Final: R$ ${valorComDesconto.toFixed(2)}`);
    } else {
        alert("Preencha os campos obrigatórios.");
    }
});
