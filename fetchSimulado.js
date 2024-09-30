function fetchSimulado() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const sucesso = true;

            if (sucesso) {
                resolve({ nome: "Carlos", idade: 30 });
            } else {
                reject(new Error("Erro ao obter dados da API."));
            }
        }, 2000);
    });
}

async function obterDadosDeAPI() {
    try {
        const resposta = await fetchSimulado();
        console.log("Dados obtidos:", resposta);
    } catch (error) {
        console.error("Ocorreu um erro:", error.message);
    }
}

obterDadosDeAPI();
