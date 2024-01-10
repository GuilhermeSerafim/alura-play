async function listarVideosDaApi() {
    const conexao = await fetch("http://localhost:3000/videos");
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

async function criaVideo(titulo, descricao, url, imagem) {
    const conexao = await fetch("http://localhost:3000/videos", {
        method: "POST",
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


export const conectaApi = {
    listarVideosDaApi,
    criaVideo
};