# case-xp API
Desafio do processo seletivo - turma xp

## Projeto desafio XPInc

Projeto desenvolvido para o processo seletivo da XPInc. Esta aplicação tem como objetivo gerenciar eventos, simulando um aplicativo de investimentos em ações e funcionalidades de conta digital. O propósito é gerenciar eventos como compra e vendas de ações, informações sobre investimentos e requisições para depósito e saque bancários.

## Sobre

Esta aplicação foi desenvolvida em Node.js com Express, usando o MySQL para fazer um CRUD e seguindo os princípios do REST. Ela se conecta ao banco de dados através da Amazon Web Services (AWS).

## Tecnologias utilizadas

| Tecnologia | Descrição |
|---|---|
| `Node.js` | Software de código aberto que permite a execução de códigos JavaScript. |
| `Express` | Framework para Node.js que fornece recursos mínimos para construção de servidores web. |
| `MySQL` | Sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL como interfaceweb. |


## Ferramentas utilizadas
| Ferramenta | Descrição |
|---|---|
| `Workbench` |  Ferramenta visual de design de banco de dados que integra desenvolvimento, administração, design, criação e manutenção de SQL.|
| `Git` | Sistema de controle de versões distribuído. |
| `Github ` | plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git. |
| `Docker` | Conjunto de produtos de plataforma como serviço que usam virtualização de nível de sistema operacional para entregar software em pacotes chamados contêineres. |
| `Eslint` | Ferramenta de análise de código estática para identificar padrões problemáticos encontrados no código JavaScript. |
| `JWT` | Para autenticação e troca de informações. |
| `Swagger e Swagger UI ` | Ferramenta online que permite criar manualmente a documentação da API. |
| `Postman` | Plataforma de API para desenvolvedores projetar, construir, testar e iterar suas APIs. |
| `Heroku` | Plataforma de nuvem como serviço para o deploy da aplicação. |
| `Aws` | Plataforma de serviços de computação em nuvem, que formam uma plataforma de computação na nuvem. |


## Métodos
Requisições para a API seguem os padrões:
| Método | Descrição |
|---|---|
| `GET` | Retorna informações de um ou mais registros. |
| `POST` | Utilizado para criar um novo registro. |

## Respostas
| Código | Descrição |
|---|---|
| `200` | Requisição executada com sucesso.|
| `201` | Novo recurso criado. |
| `400` | Erros de validação ou os campos informados não existem no sistema.|
| `401` | Dados de acesso inválidos.|
| `500` | Erro interno do servidor.|

## Instalação

1.Clone o projeto para sua máquina

```git clone git@github.com:julialanapatto/case-xp.git```

2.Entre na pasta do repositório que você acabou de clonar

```cd case-xp```

3.Instale as dependencias

```npm install```

4.Execute a aplicação

```npm run dev```

## Eslint

```npm run lint```

(você também pode instalar o plugin do ESLint no VSCode)

## Testes

```npm test```

## Dependências

Este projeto já vem com as dependências configuradas nos arquivos package.json no seguinte caminho:

```case-xp/package.json```

## Explicação sobre tomadas de decisão na abordagem do desafio

A abordagem escolhida para o desenvolvimento do desafio foi utilizar os conhecimentos adquiridos e consolidados no curso da Trybe.

Escolhi o Node.js com express devido a um maior domínio da linguagem JavaScript e tempo disponível para a realização do desafio (em um segundo momento pretendo retornar e refatorar utilizando alguns conceitos recém aprendidos - veja aqui em Melhorias possíveis).

A escolha da utlização do MySQL sem o uso de ORM (Mapeamento objeto-relacional) foi para retomar conhecimentos e praticar querys em banco de dados com o MySQL puro.

Com relação a API e informações sobre o banco de dados decidi criar uma API minúscula para simular informações e desenvolver algo novo, retornando informações que são fixas mas ao mesmo tempo me ajudando na compreensão dos retornos.

O relacionamento entre as tabelas foi elaborado considerando a usabilidade do usuário, informações necessárias para registro de informações e normativas

Os endpoints foram elaborados na arquitetura MSC com as camadas de Modelo, Serviço, Controladores e as validações por Middlewares do Express.

Dos requisitos adicionais decidi implementar os JSON Web Tokens para autenticação e autorização do JWT pata controlar o acesso e oferecer mais segurança ao endpoint, o Swagger para documentar a API e explorar uma ferramenta que nunca havia utilizado, o deploy da API e realização de uma rota de testes unitários.

## Documentação

A documentação da API pode ser acessada pela url:
[Documentação SWAGGER case xp](https://casexpinvestimentos.herokuapp.com)

## Autenticação e autorização  [POST]

Algumas rotas estão autenticadas e para acessar a API é necessário simular o login com credenciais válidas para geração do token via JWT.
