microphone Talker Manager

satellite Desenvolvimento

Projeto desenvolvido na Trybe durante o módulo de Back-End!

Nesse projeto foi desenvolvido uma API em CRUD (Create, Read, Update e Delete) para uma aplicação de cadastro de talkers (palestrantes), onde é possivel cadastrar, visualizar, pesquisar, editar e excluir informações. Foi utilizado também Express.js e middlewares.

rocket Instalação e execução

Para rodar está aplicação é necessário ter Git, Docker e o Docker Compose instalados no seu computador. O Docker Compose precisa estar na versão 1.29 ou superior.

1 - Clone o repositório:
git clone git@github.com:lauropera/trybesmith.git
2 - Na raíz do projeto, suba os containers talker_manager utilizando o docker-compose.
docker-compose up -d --build
3 - Abra o terminal do container talker_manager.
docker exec -it talker_manager bash
4 - No terminal do container, instale as dependências com o comando:
npm install
5 - Agora execute a aplicação com o comando:
npm start
