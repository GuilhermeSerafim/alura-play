async function listarVideosDaApi() {
    try {
        const conexao = await fetch("http://localhost:3000/videos");
        if (!conexao.ok) {
            throw new Error(`Erro na requisição GET: ${conexao.status}`);
        }
        const conexaoConvertida = await conexao.json();
        return conexaoConvertida;
    } catch (error) {
        console.error(`Erro ao listar vídeos: ${error.message}`);
        throw new Error("Não foi possível obter a lista de vídeos");
    }
}

async function criaVideo(titulo, descricao, url, imagem) {
    try {
        const conexao = await fetch("http://localhost:3000/videos", {
            method: "POST",
            // Para uma solicitação POST, você precisará passar um objeto das opções de configuração como um segundo argumento
            headers: {
                "Content-type": "application/json" // Que tipo de arquivo que está sendo enviado
            },
            body: JSON.stringify({ // Transformando corpo em uma string tudo que estamos enviando com api JSON
                titulo: titulo,
                descricao: `${descricao} mil visualizações`,
                url: url,
                imagem: imagem
            })
        });

        if (!conexao.ok) {
            throw new Error(`Erro na requisição POST: ${conexao.status}`);
        }

        const conexaoConvertida = await conexao.json();
        return conexaoConvertida;

    } catch (error) {
        console.error(`Erro ao criar vídeo: ${error.message}`);
        throw new Error("Não foi possível criar o vídeo");
    }
}

// Para filtro de pesquisa
async function buscaVideo(termoDeBusca) {
    try {
        const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`)
        if(!conexao.ok) {
            throw new Error(`Erro na requisição GET da barra de pesquisa: ${conexao.status}`)
        }
        const conexaoConvertida = await conexao.json(); 
        return conexaoConvertida;
    } catch (error) {
        console.error(`Erro na busca de vídeos: ${error.message}`);
        throw new Error("Não foi possível realizar a busca de vídeos");
    }

   
}

export const conectaApi = {
    listarVideosDaApi,
    criaVideo,
    buscaVideo
};