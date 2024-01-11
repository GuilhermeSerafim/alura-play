import { conectaApi } from "./conectaApi.js";
import constroiCardLi from "./mostrarVideos.js";

const pesquisarVideoInput = document.querySelector("[data-pesquisar-input]");
const botaoDePesquisarVideo = document.querySelector("[data-pesquisar-botao]");

botaoDePesquisarVideo.addEventListener('click', evento => buscaVideo(evento));

async function buscaVideo(eventoDoBotao) {
    eventoDoBotao.preventDefault();
    // Realizando requisição get e abstraindo n objetos, conforme o valor da busca
    const buscaNaApiComOValorDoInput = await conectaApi.buscaVideo(pesquisarVideoInput.value);

    const ulVideos = document.querySelector("[data-lista]");
    buscaNaApiComOValorDoInput.forEach(video => ulVideos.appendChild(
        constroiCardLi(video.titulo, video.descricao, video.url, video.imagem)));

}