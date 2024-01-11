import { conectaApi } from "./conectaApi.js";
import constroiCardLi from "./mostrarVideos.js";

const inputPesquisar = document.querySelector("[data-pesquisar-input]");
const btPesquisar = document.querySelector("[data-pesquisar-botao]");

btPesquisar.addEventListener('click', evento => buscaVideo(evento));

async function buscaVideo(eventoDoBotao) {
    eventoDoBotao.preventDefault();
    // Realizando requisição get e abstraindo n objetos, conforme o valor da busca
    const buscaNaApiComOValorDoInput = await conectaApi.buscaVideo(inputPesquisar.value);
    const ulVideos = document.querySelector("[data-lista]");

    // Removendo todos os vídeos
    while(ulVideos.firstChild) { // Verifica se há filho
        ulVideos.removeChild(ulVideos.firstChild); // Remove o filho
    }

    // Adicionando apenas os vídeos filtrados
    buscaNaApiComOValorDoInput.forEach(video => ulVideos.appendChild(
        constroiCardLi(video.titulo, video.descricao, video.url, video.imagem))
    );

    // Validação para nenhum video encontrados
    if(buscaNaApiComOValorDoInput.length == 0) {
        ulVideos.innerHTML = `
            <div class="erro"><h2 class="mensagem__titulo">Não existem videos com o termo "${inputPesquisar.value}"</h2>
            <img src=img/not-found.png class="erro__imagem"></img><div>
            `
    }

}