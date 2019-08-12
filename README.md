# GoBarber
  API de estudos para uma barbearia, não repare na bagunça :D

## ++ Docker samples

### criando container Postgres
  - manter dados integros, relacionais => +bem definidos;
  - como: usuários (tanto prestadores como não prestadores de serviço)
`docker run --name databasebarber -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres`

### criando container MongoDB
  - manter dados de estado, não relacionais => +performáticos
  - como: notificações dos agendamentos
`docker run --name mongobarber -p 27017:27017 -d  -t mongo`

### criando container Redis
  - manter dados de background jobs / filas => chave-valor => extremamente +performáticos
  - como: background tasks de envio de e-mail para verificar falhas, definir prioridades, fazer novas tentativas, etc
`docker run --name redisbarber -p 6379:6379 -d -t redis:alpine`

## Extensões usadas

### ++ Dependencies

- `express` para ajudar no gerenciamento de rotas, middlewares e configurações do servidor
- `Sequelize` para integração com bancos relacionais - no caso Postgres
- `pg` e `pg-hstore` para permitir a integração com o postgres
- `bcryptjs` para gerar o hash da senha do usuário
- `jsonwebtoken` para autenticação de usuário
- `Yup` para validação de integridade das entradas (schema-validation)
- `Multer` para tratar upload de arquivos
- `Date-fns@next` para manipular datas
- `Mongoose` para integração com MongoDB
- `Nodemailer` to send emails
- `Express-handlebars` -> template engine para reconhecer variaveis do node em HTML e configurar e-mails
- `Nodemailer-express-handlebars` para relacionar o Nodemailer com o handlebars
- `Bee-queue` para gerenciamento performático de filas e background jobs, como envio de e-mails
- `Sentry.io` para gerenciamento de exceções
- `Cors` para controle de acesso de origens
- `Express-async-errors` para permitir que o express detecte erros assíncronos e notifique o Sentry
- `Youch` para tratativa das mensagens de erro no servidor
- `Dotenv` para manipular variáveis de ambiente

### ++ Dev Dependencies
- `Sucrase-node` para alterar da sintaxe padrão (require/module.exports) para a moderna (import/export default)
- `Nodemon` para aplicar mudanças no código reiniciando o servidor automáticamente
- `ESlint` para padronização de código - neste caso usando AirBnb styleguide
- `Prettier` para outros padrões de código além do utilizado no AirBnb Styleguide
- `eslint-config-prettier` para sincronizar verificações do Prettier com o ESlint
- `Sequelize-cli` para facilitar a criação de Migrations por linha de comando
