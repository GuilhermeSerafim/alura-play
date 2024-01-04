import { conectaApi } from "./conectaApi.js";

const ulVideos = document.querySelector("[data-lista]"); // Data attribute

function constroiCardLi(titulo, descricao, url, imagem) {
    const video = document.createElement("li");
    video.className = "videos__item";
    video.innerHTML = `
        <li class="videos__item">
            <iframe width="100%" height="72%" src="${url}"
                title="${titulo}" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
            <div class="descricao-video">
                <img src="${imagem}" alt="logo canal alura">
                <h3>${titulo}</h3>
                <p>${descricao}</p>
            </div>
        </li>
    `
    return video;
}

async function listaVideos() {
    const listaApi = await conectaApi.listarVideosDaApi();
    listaApi.forEach(video => ulVideos.appendChild(
        constroiCardLi(video.titulo, video.descricao, video.url, video.imagem)
    ));
}

listaVideos();