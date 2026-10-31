<p align="center"> <img src="https://imgur.com/J3hD21O.png" alt="Javascript: criando requisições"> </p>

<hr>

# 🌟 AluraPlay JavaScript: Criando Requisições 🚀

## O que Aprendi?

✨ **Transformação Dinâmica:** Converti o AluraPlay em uma plataforma dinâmica em 3 etapas emocionantes!

1. 🔄 **Lista Dinâmica:** Tornamos a lista de vídeos na página inicial dinâmica.
2. 📤 **Cadastro de Vídeos:** O formulário cadastra URL, título, imagem e descrição na API local; não envia arquivos de vídeo.
3. 🔍 **Ferramenta de Busca:** Implementamos uma busca textual com o parâmetro `q` do json-server.

## Como Fiz?

🔧 **Tecnologias e Habilidades:**
- Instalação do NodeJS e json-server.
- Mockup de uma API para simulação.
- Criação de requisições GET e POST.
- JavaScript assíncrono para requisições à API.
- Manipulação do DOM para exibição dos resultados.
- Tratamento de erros nas requisições.

## Instrutora 🎤

🌟 **Mônica Hillman (Moni Hillmann)**
- [LinkedIn](https://www.linkedin.com/in/monicamhillman/)
- [Github](https://github.com/MonicaHillman)

## Screenshots
![Screenshot da tela inicial do AluraPlay](https://imgur.com/aymxEsh.png)
![Screenshot da tela do formulário do AluraPlay](https://imgur.com/ShNADf2.png)

## Escopo e execução local

Exercício de consumo e escrita em uma API simulada com json-server. `js/conectaApi.js` usa `http://localhost:3000/videos` para GET, POST e busca. Não há upload de mídia nesse fluxo: os vídeos são referenciados por URL.

O manifesto declara `json-server` e `sweetalert2`. Com Node.js e npm disponíveis, `npm install` instala as dependências e `npm run start-server` inicia o json-server observando `db.json`. Sirva os arquivos HTML/JavaScript por um servidor HTTP local em outra porta e mantenha a API em execução.
