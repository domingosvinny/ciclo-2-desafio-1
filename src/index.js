const prompt = require('prompt-sync')({ sigint: true });

let valordaMesa = [];

while (true) {
    console.log("\nEscolha uma opção:");
    console.log("1. Calcular a conta:");
    console.log("2. Sair");
    let opcao = prompt("Opção: ");
    
    console.log();
    if (opcao === "1") {
        let numMesa = parseInt(prompt("Informe o numero da mesa: "));
        let numPessoas = parseInt(prompt("Informe o numero de pessoas na mesa: "));
        let valorTotal = parseFloat(prompt("Informe o valor total da mesa: "));

        console.log("\nInforme a forma de pagamento:");
        console.log("1. Pix");
        console.log("2. Dinheiro");
        console.log("3. Cartão de Crédito");
        console.log("4. Cartão de Debito");
        let metodoPagamento = prompt("Opção: ");

        
        let totalComDesconto;
        if (metodoPagamento === "1" || metodoPagamento === "2") {
            totalComDesconto = valorTotal * 0.9;

            
            console.log("\nValor com desconto de 10%");
            console.log();
        } else {
            totalComDesconto = valorTotal;

            
            console.log("\nValor sem desconto");
            console.log();
        }

        let valorPorPessoa = totalComDesconto / numPessoas;

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
                metodoPagamento = "Cartão de Debito";
                break;
            default:
                metodoPagamento = "Desconhecido, tente novamente.";
        }

        let conta = {
            mesa: numMesa,
            pessoas: numPessoas,
            total: valorTotal,
            pagamento: metodoPagamento,
            totalComDesconto: totalComDesconto,
            valorPorPessoa: valorPorPessoa
        };

        valordaMesa.push(conta);

        for (let i = 0; i < valordaMesa.length; i++) {
            console.log(`Mesa: ${valordaMesa[i].mesa}, Pessoas: ${valordaMesa[i].pessoas}, Total: ${valordaMesa[i].total.toFixed(2)}, Pagamento: ${valordaMesa[i].pagamento}, Total com Desconto: ${valordaMesa[i].totalComDesconto.toFixed(2)}, Valor por Pessoa: ${valordaMesa[i].valorPorPessoa.toFixed(2)}`);
        }
        console.log();
        console.log("O desconto só é aplicado quando a mesa fecha o pagamento à vista ou pix, caso contrário o desconto não é aplicado. Conta calculada com sucesso! ");
        
        
    } else if (opcao === "2") {
        
        break;
    }
}