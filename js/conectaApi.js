async function listarVideosDaApi() {
    const conexao = await fetch("http://localhost:3000/video");
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

async function criaVideo(titulo, descricao, url, imagem) {
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

    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

// Para filtro de pesquisa
async function buscaVideo(termoDeBusca) {
    const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`)
    const conexaoConvertida = await conexao.json();
    console.log(conexaoConvertida);
    return conexaoConvertida;
}

export const conectaApi = {
    listarVideosDaApi,
    criaVideo,
    buscaVideo
};