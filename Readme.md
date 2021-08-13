## API Book

### Rotas

* Necessário criar um usuário antes para realizar qualquer atividade nas rotas
- (/user): Rota para inserir um elemento no banco de dados passando (name, email) - Tipo de Rota: POST

* Para acessar realizar qualquer atividade nas rotas de tarefas, tem que passar o usuário cadastrado via Header com: email

- (/tasks/list/): Lista todos os tarefas que estão cadastrados no banco, se quiser lista apenas as tarefas pendentes basta passar via QUERY (status_task_query=pending) - Tipo da Rota: GET

- (/tasks/update/:id): Atualiza o status da tarefa no banco de dados passando o ID via parametro e com as informações (status_task) - Tipo da Rota: UPDATE

- (/tasks): Rota para criar tarefa no banco de dados passando (description, person_in_change, email) - Tipo de Rota: POST

### Docker

- Todo o projeto está rodando em Docker.
- Versão do docker 20.10.6
- Versão do docker-compose 1.29.2

#### Executar Projeto

Instalar as dependencias do projeto
```bash
npm install
ou
yarn
```
Comando para executar o projeto em docker que vai está rodando o Banco de dados Postgres e Aplicação Book
```bash
docker-compose up -d
```
Rodar a migration para criar a tabela book no banco
```bash
npm run typeorm migration:run
ou
yarn typeorm migration:run
```
Obs: Caso esteja usando Windows e de problema para rodar aplicação use esse link para resolver o problema: https://www.programmersought.com/article/48267850072/

- Apenas para resolver o problema de compartilhamento de arquivo, selecionando um local para o compartilhamento.
