function verificarPromocoes() {
    // Define uma constante taxaDesconto com valor 0.10, que representa uma taxa de desconto de 10%
    const taxaDesconto = 0.10;

    const entrada = gets(); 
    const produtos = entrada.split(' - '); 
    const resultado = [];

    produtos.forEach(produto => {
        const [nome, quantidadePreco] = produto.split(': '); 
        const [quantidade, precoUnitario] = quantidadePreco.split(', ').map(Number); 

        let precoFinal = precoUnitario; // Inicializa o preço final como o preço unitário

        // Verifica se a quantidade é maior ou igual a 5 e aplica o desconto se necessário
        if (quantidade >= 5) {
            precoFinal = precoUnitario * (1 - taxaDesconto); // Aplica o desconto
        }

        resultado.push(`${nome}: ${precoFinal.toFixed(2)}`); // Adiciona o resultado formatado à lista
    });

    print(resultado.join(' - ')); // Imprime o resultado
}

// Chame a função
verificarPromocoes();
