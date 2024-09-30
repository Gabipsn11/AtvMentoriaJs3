function buscarUsuario() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const usuarioEncontrado = true;

            if (usuarioEncontrado) {
                resolve("Carlos");
            } else {
                reject(new Error("Usuário não encontrado."));
            }
        }, 2000);
    });
}

async function executarBusca() {
    try {
        const nomeUsuario = await buscarUsuario();
        console.log(`Usuário encontrado: ${nomeUsuario}`);
    } catch (error) {
        console.error(error.message);
    }
}

executarBusca();
