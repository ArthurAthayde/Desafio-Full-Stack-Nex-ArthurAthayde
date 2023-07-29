# Nex MKTPlace - Desafio FullStack Nex Digital

![Nex MKTPlace Logo](https://drive.google.com/uc?export=view&id=1ZRsrjN1d0VI1S02gFIzyQMujzXc22fTw)

Bem-vindo(a) à aplicação Nex MKTPlace! Este projeto foi desenvolvido como parte do teste FullStack da empresa Nex Digital.

## Tecnologias Utilizadas

- Banco de Dados: PostgreSQL com Sequelize
- BackEnd: Express.js e Node.js
- FrontEnd: React.js
- Estilização: styled-components
- Notificações: toastify
- Validação de Dados: zod

## Links Úteis

- Link do Trello para organização do projeto: [https://trello.com/b/vQo6V7Tm/desafio-full-stack-nex-digital](https://trello.com/b/vQo6V7Tm/desafio-full-stack-nex-digital)
- Link do Figma para o design do projeto: [https://www.figma.com/file/Gq2xyBJS9pKPV8RJlbb18d/Nex-MKTPlace?type=design&node-id=8217-513&mode=design&t=lrKwdu8c7AnYucuV-0](https://www.figma.com/file/Gq2xyBJS9pKPV8RJlbb18d/Nex-MKTPlace?type=design&node-id=8217-513&mode=design&t=lrKwdu8c7AnYucuV-0)

## Instalação e Execução

1. Clone o repositório para sua máquina local:

```bash
git clone https://github.com/seu-usuario/nex-mktplace.git
```

Instale as dependências do BackEnd e do FrontEnd:

```bash
cd nex-mktplace
npm install # Para BackEnd (Node.js)
cd client
npm install # Para FrontEnd (React.js)
```

Configuração do Banco de Dados:

- Certifique-se de ter o PostgreSQL instalado e configurado em sua máquina.
- Crie um banco de dados com o nome "nex_mktplace" (ou outro nome de sua escolha).
- Configure as credenciais de acesso ao banco de dados no arquivo config/database.js.

  Executando o BackEnd:

```bash
npm run dev
```

Executando o FrontEnd:

```bash
cd client
npm start
```

Acesse a aplicação no seu navegador:

```bash
http://localhost:3000/
```
