import { conectaApi } from "./conectaApi.js";

const pesquisarVideoInput = document.querySelector("[data-pesquisar-input]");
const botaoDePesquisarVideo = document.querySelector("[data-pesquisar-botao]");

botaoDePesquisarVideo.addEventListener('click', () => buscaVideo(pesquisarVideoInput.value));

async function buscaVideo(pesquisarVideoInput) {
    await conectaApi.buscaVideo(pesquisarVideoInput);
}