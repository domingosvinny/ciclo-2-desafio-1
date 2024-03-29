
    const prompt = require('prompt-sync')({sigint:true})

    let valordaMesa = [];

    while (true) {
    console.log("\nEscolha uma opção:");
    console.log("1. Calcular a conta:");
    console.log("2. Sair");
  
    let opcao = prompt("Opção: ");

    if (opcao === "1") {
        let numMesa = parseInt(prompt("Informe o numero da mesa: "));
        let numPessoas = parseInt(prompt("Informe o numero de pessoas na mesa: "));
        let valorTotal = parseFloat(prompt("Informe o valor total da mesa: "));
        
        console.log("Informe a forma de pagamento:");
        console.log("1. Pix");
        console.log("2. Dinheiro");
        console.log("3. Cartão");
        let metodoPagamento = prompt("Opção: ");

        switch (metodoPagamento) {
            case "1":
                metodoPagamento = "Pix";
                break;
            case "2":
                metodoPagamento = "Dinheiro";
                break;
            case "3":
                metodoPagamento = "Cartão";
                break;
            default:
                metodoPagamento = "Desconhecido, tente novamente.";
        }

        let  totalComDesconto = valorTotal * 0.9;

        let  valorPorPessoa = totalComDesconto / numPessoas;


        let conta = {
         mesa: numMesa,
         pessoas: numPessoas,
         total: valorTotal,
         pagamento: metodoPagamento,
         totalComDesconto: totalComDesconto,
         valorPorPessoa: valorPorPessoa


        };
        valordaMesa.push(conta);

        console.log("Valor com desconto de 10%");
        
        for (let i = 0; i < valordaMesa.length; i++) {
            console.log(`Mesa: ${valordaMesa[i].mesa}, Pessoas: ${valordaMesa[i].pessoas}, Total: ${valordaMesa[i].total.toFixed(2)}, Pagamento: ${valordaMesa[i].pagamento}, Total com Desconto: ${valordaMesa[i].totalComDesconto.toFixed(2)}, Valor por Pessoa: ${valordaMesa[i].valorPorPessoa.toFixed(2)}`);
        }
        
        console.log("Conta calculada com sucesso!");
    }
// Aqui você pode fazer qualquer coisa que queira após sair do loop, por exemplo, imprimir todas as contas registradas.
        else if (opcao === "2") {
        // Sair do loop e encerrar o programa
        break;
    }
}

