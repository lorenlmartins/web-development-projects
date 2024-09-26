//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// Classe que calcula o frete com base na taxa fixa e taxa por produto
class CalculadoraFrete {
    constructor(taxaFixa, taxaPorProduto) {
        // Armazena a taxa fixa de frete na propriedade `taxaFixa`
        this.taxaFixa = taxaFixa;

        // Armazena a taxa por produto na propriedade `taxaPorProduto`
        this.taxaPorProduto = taxaPorProduto;
    }

    calcularFrete(listaProdutos) {
        const produtos = listaProdutos.split(', '); // Divide a lista de produtos
       
        const quantidadeTotal = produtos.reduce((total, produto) => {
            const quantidade = parseInt(produto.split(':')[1], 10); // Obtém a quantidade
            return total + quantidade; // Soma a quantidade ao total
        }, 0);
        
        // Calcula o valor total do frete
        const valorTotalFrete = this.taxaFixa + (this.taxaPorProduto * quantidadeTotal);
        
        // Retorna o valor do frete formatado com duas casas decimais
        return valorTotalFrete.toFixed(2);
    }
}

// Função principal para obter os dados de entrada e imprimir o resultado
function main() {
    const listaProdutos = gets(); // Lê a lista de produtos
    
    const taxaFixa = parseFloat(gets()); // Lê a taxa fixa e converte para float
    
    const taxaPorProduto = parseFloat(gets()); // Lê a taxa por produto e converte para float
    
    const calculadora = new CalculadoraFrete(taxaFixa, taxaPorProduto); // Cria uma nova instância da calculadora
    
    print(calculadora.calcularFrete(listaProdutos)); // Calcula e imprime o frete
}

// Chamar a função principal para executar o desafio
main();
