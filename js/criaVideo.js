import { conectaApi } from "./conectaApi.js";

const formulario = document.querySelector("[data-formulario]");

async function criaElementoVideo(evento) {
    evento.preventDefault();
    const imagem = document.querySelector("[data-imagem]").value;
    const url =  document.querySelector("[data-url]").value;
    const titulo =  document.querySelector("[data-titulo]").value;
    const descricao = Math.floor(Math.random() * 10).toString(); // O total de visualizações é randomico    
    // Essa função é async, então retorna uma promisse, para tratar isso, precisamos colocar await/async tbm
    await conectaApi.criaVideo(titulo, descricao, url, imagem); 

    window.location.href = "../pages/envio-concluido.html";

}

formulario.addEventListener('submit', evento => criaElementoVideo(evento));