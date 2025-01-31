function verificarPrimo(numero) {
    // Passo 1: Verifique se o número é maior que 1
    if (numero <= 1) {
      return "Não é primo";
    }
  
    // Passo 2: Itere de 2 até a raiz quadrada do número
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        return "Não é primo"; // Divisão exata encontrada
      }
    }
  
    // Passo 3: Se não houve divisão exata, o número é primo
    return "É primo";
  }
  
  // Exemplos de teste
  console.log(verificarPrimo(7));  
  console.log(verificarPrimo(4));  
  console.log(verificarPrimo(1));  
  console.log(verificarPrimo(13));