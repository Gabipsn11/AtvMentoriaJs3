function fetchSimulado() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const sucesso = false;

            if (sucesso) {
                resolve({ nome: "Carlos", idade: 30 });
            } else {
                reject(new Error("Erro ao obter dados da API."));
            }
        }, 2000);
    });
}

async function carregarDados() {
    try {
        const dados = await fetchSimulado();
        console.log("Dados obtidos:", dados);
    } catch (error) {
        console.error("Ocorreu um erro:", error.message);
    } finally {
        console.log("Processo finalizado");
    }
}

carregarDados();
