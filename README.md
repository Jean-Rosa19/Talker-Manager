#Talker Manager#

## Projeto desenvolvido na Trybe durante o módulo de Back-End!

Nesse projeto foi desenvolvido uma API em CRUD (Create, Read, Update e Delete) para uma aplicação de cadastro de talkers (palestrantes), onde é possivel cadastrar, visualizar, pesquisar, editar e excluir informações. Foi utilizado também Express.js e middlewares.

## Instalação e execução

Para rodar está aplicação é necessário ter Git, Docker e o Docker Compose instalados no seu computador. O Docker Compose precisa estar na versão 1.29 ou superior.

1 - Clone o repositório:
git@github.com:Jean-Rosa19/Talker-Manager.git

2 - Na raíz do projeto, suba os containers talker_manager utilizando o docker-compose.
docker-compose up -d --build

3 - Abra o terminal do container talker_manager.
docker exec -it talker_manager bash

4 - No terminal do container, instale as dependências com o comando:
npm install

### Habilidades:

- Entender a diferença entre execução síncrona e assíncrona;
- Realizar operações assíncronas com callbacks e Promises;
- Ler e escrever arquivos localmente com NodeJS;
- Escrever os próprios scripts que criam e consomem Promises;
- Realizar chamadas de funções de forma consciente;
- Entender o que é o HTTP, o que é uma API e o que os dois têm a ver com o Express;
- Entender a estrutura de uma aplicação Express e como organizar seu código;
- Criar rotas e aplicar middlewares;
- Escrever APIs utilizando Node e Express.
