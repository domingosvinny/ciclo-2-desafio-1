
 const prompt = require('prompt-sync')({ sigint: true });

// Array para armazenar os detalhes das contas
let valordaMesa = [];

// Loop principal para exibir o menu e as opções do usuário
while (true) {
    console.log("\nEscolha uma opção:");
    console.log("1. Calcular a conta:");
    console.log("2. Sair");
    
    // Solicitação para escolher uma opção
    let opcao = prompt("Opção: ");
    
    console.log();

    
    if (opcao === "1") {
        // Solicitação dos seguintes dados
        let numMesa = parseInt(prompt("Informe o numero da mesa: "));
        let numPessoas = parseInt(prompt("Informe o numero de pessoas na mesa: "));
        let valorTotal = parseFloat(prompt("Informe o valor total da mesa: "));

        // Solicitação do seguinte dado - gorjeta
        let incluirGorjeta = prompt("Deseja incluir gorjeta correspondente a 3% do valor da conta? (S/N): ");
        incluirGorjeta = incluirGorjeta.toUpperCase(); // Converte para maiúsculas para evitar problemas com caixa (S ou N)

        let gorjeta = 0;
        // Comando para realizar o calculo da gorjeta.
        if (incluirGorjeta === "S") {
            gorjeta = valorTotal * 0.03; // Calculo de 3% do valor total
            console.log(`Valor da gorjeta: R$ ${gorjeta.toFixed(2)}`);
            let concordarGorjeta = prompt("Você concorda com este valor de gorjeta? (S/N): ");
            concordarGorjeta = concordarGorjeta.toUpperCase();
            // Caso cliente não concorde, a gorjeta é definida como 0
            if (concordarGorjeta !== "S") {
                gorjeta = 0; 
            }
        }

        // Adiciona a gorjeta ao valor total da conta
        valorTotal += gorjeta; 

        // Comando para forma de pagamento
        console.log("\nInforme a forma de pagamento:");
        console.log("1. Pix");
        console.log("2. Dinheiro");
        console.log("3. Cartão de Crédito");
        console.log("4. Cartão de Débito");
        let metodoPagamento = prompt("Opção: ");

        let totalComDesconto;
        // Verificação se há desconto com base na forma de pagamento
        if (metodoPagamento === "1" || metodoPagamento === "2") {
            totalComDesconto = valorTotal * 0.9;
            console.log("\nValor com desconto de 10%");
        } else {
            totalComDesconto = valorTotal;
            console.log("\nValor sem desconto");
        }

        // Calculo do valor por pessoa
        let valorPorPessoa = totalComDesconto / numPessoas;

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

        // Criação de um objeto "conta" com os detalhes da mesa e adiciona ao array valordaMesa
        let conta = {
            mesa: numMesa,
            pessoas: numPessoas,
            total: valorTotal,
            gorjeta: gorjeta,
            pagamento: metodoPagamento,
            totalComDesconto: totalComDesconto,
            valorPorPessoa: valorPorPessoa
        };

        valordaMesa.push(conta);

        // Comando para exibir os detalhes da conta
        for (let i = 0; i < valordaMesa.length; i++) {
            console.log(`Mesa: ${valordaMesa[i].mesa}, Pessoas: ${valordaMesa[i].pessoas}, Total: ${valordaMesa[i].total.toFixed(2)}, Gorjeta: ${valordaMesa[i].gorjeta.toFixed(2)}, Pagamento: ${valordaMesa[i].pagamento}, Total com Desconto: ${valordaMesa[i].totalComDesconto.toFixed(2)}, Valor por Pessoa: ${valordaMesa[i].valorPorPessoa.toFixed(2)}`);
        }
        console.log();
        console.log("O desconto só é aplicado quando o pagamento da mesa é feito à vista (dinheiro) ou pix, caso contrário o desconto não é aplicado. Conta calculada com sucesso!");
        
    } else if (opcao === "2") {
        break; // 
    }
} 

