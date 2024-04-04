// Comando para adicionar um evento de clique ao botão com o ID 'botao-calcular'
document.getElementById('botao-calcular').addEventListener('click', function() {
    
    // Comando para obter dados a partir dos campos de entrada do HTML
    var numMesa = parseInt(document.getElementById('numero-mesa').value);
    var numPessoas = parseInt(document.getElementById('numero-pessoas').value);
    var valorTotal = parseFloat(document.getElementById('valor-mesa').value);

    // Comando para inserir gorjeta
    var incluirGorjeta = prompt("Deseja incluir gorjeta correspondente a 3%? (S/N): ");
    incluirGorjeta = incluirGorjeta.toUpperCase();

    // Calculo da gorjeta
    var gorjeta = 0;
    if (incluirGorjeta === "S") {
        gorjeta = valorTotal * 0.03;
        console.log(`Valor da gorjeta: R$ ${gorjeta.toFixed(2)}`);
        // Comando para concorda com o valor da gorjeta
        var concordarGorjeta = prompt("Você concorda com este valor de gorjeta? (S/N): ");
        concordarGorjeta = concordarGorjeta.toUpperCase();
        // Define a gorjeta como zero se o usuário não concordar
        if (concordarGorjeta !== "S") {
            gorjeta = 0; 
        }
    }

    // Comando p/ adicionar valor da gorjeta ao valor total da mesa
    valorTotal += gorjeta; 

    // Comando para o usuário informar a forma de pagamento
    var metodoPagamento = prompt("Informe a forma de pagamento:\n1. Pix\n2. Dinheiro\n3. Cartão de Crédito\n4. Cartão de Débito\nOpção: ");

    var totalComDesconto;
    // Comando para desconto de 10% 
    if (metodoPagamento === "1" || metodoPagamento === "2") {
        totalComDesconto = valorTotal * 0.9;
        console.log("\nValor com desconto de 10%");
    } else {
        totalComDesconto = valorTotal;
        console.log("\nValor sem desconto");
    }

    // Calculo - valor por pessoa
    var valorPorPessoa = totalComDesconto / numPessoas;

    // Converte o método de pagamento para um formato mais legível
    switch (metodoPagamento) {
        case "1":
            metodoPagamento = "Pix";
            break;
        case "2":
            metodoPagamento = "Dinheiro";
            break;
        case "3":
            metodoPagamento = "Cartão de Crédito";
            break;
        case "4":
            metodoPagamento = "Cartão de Débito";
            break;
        default:
            metodoPagamento = "Desconhecido, tente novamente.";
    }

    // Exibe as informações do pedido na div com o ID 'info'
    var infoDiv = document.getElementById('info');
    infoDiv.innerHTML += "<h2>Informações do Pedido</h2>" +
                        "<p>Número da Mesa: " + numMesa + "</p>" +
                        "<p>Nº de Pessoas na Mesa: " + numPessoas + "</p>" +
                        "<p>Valor Total da Mesa: R$ " + valorTotal.toFixed(2) + "</p>" +
                        "<p>Gorjeta: R$ " + gorjeta.toFixed(2) + "</p>" +
                        "<p>Forma de Pagamento: " + metodoPagamento + "</p>" +
                        "<p>Total com Desconto: R$ " + totalComDesconto.toFixed(2) + "</p>" +
                        "<p>Valor por Pessoa: R$ " + valorPorPessoa.toFixed(2) + "</p>";
});
