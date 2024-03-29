//npm install prompt-sync
//npm init -y

const entrada = require('prompt-sync')({ sigint: true });

console.clear();
let TotalConta;
let QtdPessoas;
let TotalContacg;
let valporpessoa;
let valcomgorjeta;

//entrada
function FecharConta() {
    TotalConta = parseFloat(entrada("Digite o Valor total da conta: ")).toFixed(2);
    QtdPessoas = entrada("Digite a quantidade de pessoas: ");
    //let Formapag = entrada("Digite a forma de pagamento: "));
    valporpessoa = 0;


    //Validação para desconto
    let selecao = true;
    while (selecao) {
        console.log("Escolha a forma de pagamento: ");
        console.log("1. Pix");
        console.log("2. Dinheiro");
        console.log("3. Cartão de Debito");
        console.log("4. Cartão de Crédito");


        let Formapag = entrada("\nOpção: ");

        if (Formapag === "1") {
            TotalConta = (TotalConta * 0.9).toFixed(2);
            console.log("\nForma de pagamento escolhida: PIX");

            selecao = false;
        }
        else if (Formapag === "2") {
            console.log("\nForma de pagamento escolhida: Dinheiro")
            TotalConta = (TotalConta * 0.9).toFixed(2);
            selecao = false;
        }
        else if (Formapag === "3") {
            console.log("\nForma de pagamento escolhida: Cartao Débito")
            selecao = false;
        }
        else if (Formapag === "4") {
            console.log("\nForma de pagamento escolhida: Cartao Crédito")
            selecao = false;
        }
        else {
            console.clear();
            console.log("Opção Invalida\n");
            selecao = true;
        }
    }
    //calculo por pessoa
    valporpessoa = (TotalConta / QtdPessoas);
    console.log("\n O pagamento fica: R$ " + (valporpessoa).toFixed(2) + " para cada.\n");
}


function calculargorjeta() {

    valcomgorjeta = 0;
    TotalContacg = 0;
    let valgorjedigitado = 0;

    let selecao = true;
    while (selecao) {
        console.log("Posso adicionar os 10% do serviço? \n");
        console.log("1. OK! Pode cobrar o serviço!!!");
        console.log("2. Gostaria de acrescentar uma gojeta com outro valor.");
        console.log("3. Desculpe mudei de idéia, hoje não vou contribuir.");

        let Formagorjeta = entrada("\nOpção: ");

        if (Formagorjeta === "1") {
            TotalContacg = (TotalConta * 1.10).toFixed(2);
            console.log("\nAgradeço o pagamento do serviço.");
            valcomgorjeta = (TotalContacg / parseInt(QtdPessoas));
            console.log("\n Então o pagamento ficou: R$ " + (valcomgorjeta).toFixed(2) + " para cada.\n");
            selecao = false;
        }
        else if (Formagorjeta === "2") {
            valgorjedigitado = parseFloat(entrada("Digite o valor da Gorjeta: ")).toFixed(2);
            TotalContacg = parseFloat(TotalConta) + parseFloat(valgorjedigitado);
            console.log("\nAgradecemos a gorjeta!!!");
            //console.log(valcomgorjeta);
            //console.log(TotalContacg);
            //console.log(QtdPessoas);
            valcomgorjeta = (TotalContacg / parseInt(QtdPessoas)).toFixed(2);
            console.log("\nCom a gorjeta de R$ " + valgorjedigitado);
            console.log("O pagamento fica: R$ " + valcomgorjeta + " para cada.\n");

            selecao = false;
        }
        else if (Formagorjeta === "3") {

            console.log("\nSem problema, pagamento fica: R$ " + valporpessoa + " para cada.");
            console.log("\nAgradecemos a Visita!!!");
            selecao = false;

        }
        else {
            console.clear();
            console.log("Opção Invalida\n");
        }

    }
}


FecharConta();

let dargorjeta = entrada("Poderia contribuir com uma gorjeta? (s/n)");
if (dargorjeta.toLowerCase() === "s") {
    calculargorjeta();
}
else {
    console.log("\nAgradecemos a Visita!!!\n");
}
