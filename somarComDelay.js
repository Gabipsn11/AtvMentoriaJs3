function somarComDelay(num1, num2) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const resultado = num1 + num2;
            resolve(resultado);
        }, 1000);
    });
}

async function executarSomaEncadeada() {
    try {
        const resultado1 = await somarComDelay(5, 10);
        console.log(`Resultado da primeira soma: ${resultado1}`);

        const resultadoFinal = await somarComDelay(resultado1, 20);
        console.log(`Resultado final: ${resultadoFinal}`);
    } catch (error) {
        console.error("Ocorreu um erro:", error);
    }
}

executarSomaEncadeada();
