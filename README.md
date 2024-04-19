# Node-Express - Typescript REST API template

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/ThiagoKasperSouza/node-express.svg)](https://github.com/ThiagoKasperSouza/node-express/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/ThiagoKasperSouza/node-express.svg)](https://github.com/ThiagoKasperSouza/node-express/pulls)
[![License](https://img.shields.io/badge/license-BSD_3-blue.svg)](/LICENSE)


## 🧐 About <a name = "about"></a>

Criar uma estrutura de pastas intuitiva para APIs REST em qualquer linguagem pode demorar algum tempo, mesmo seguindo algum padrão como MVC, DDD ou suas variações. Além disso, muitas vezes não há muito tempo para pesquisar eventuais vulnerabilidades que uma API pode ficar exposta, muitas vezes comprometendo a segurança de um sistema em situações de prazo curto.

Por conta isso, acredito que seja interessante arquitetar templates iniciais com libs específicas, para tentar garantir qualidade em entregas ágeis. Esse repositório, portanto, visa auxiliar nisso a partir de um template para node e express com typescript e Auth0.

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Built Using](#built_using)
- [TODO](./TODO.md)
- [Contributing](../CONTRIBUTING.md)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)


## 🏁 Getting Started <a name = "getting_started"></a>

Essas são instruções que vão lhe entregar uma cópia do projeto rodando em sua máquina local com propósitos de desenvolvimento e teste. Veja [deployment](#deployment) para informações de como subir o projeto em produção

### Prerequisites

O que você precisa ter instalado

- Node.js

### Installing

Cria uma cópia de .env.example chamada .env; 

Configure as variáveis de ambiente necessárias no Auth0
https://auth0.com/

Instale as dependências do projeto

```
npm install
```

Agora, no terminal, abra o servidor em ambiente de desenvolvimento

```
npm run dev
```

End with an example of getting some data out of the system or using it for a little demo.

## 🔧 Running the tests <a name = "tests"></a>

Os testes unitários rodam usando vitest

### Rodando os testes

No terminal, digite

```
npm run test
```

### Usando o lint

Para testar os padrões de estilo de código depois de implementar uma nova feature ou consertar um bug, digite:

```
npm run lint
```

## 🚀 Deployment <a name = "deployment"></a>

Alternativas:

- Railway
- Render

## ⛏️ Built Using <a name = "built_using"></a>

- [Express](https://expressjs.com/) - Server Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment

## ✍️ Authors <a name = "authors"></a>

- [@ThiagoKasperSouza](https://github.com/ThiagoKasperSouza) - Idea & Initial work

See also the list of [contributors](https://github.com/ThiagoKasperSouza/node-express/contributors) who participated in this project.

## 🎉 Acknowledgements <a name = "acknowledgement"></a>

- Inspiration
- References:

https://dev.to/renatoadorno/padroes-de-commits-commit-patterns-41co

https://www.alura.com.br/artigos/versionamento-semantico-breve-introducao?utm_term=&utm_campaign=%5BSearch%5D+%5BPerformance%5D+-+Dynamic+Search+Ads+-+Artigos+e+Conte%C3%BAdos&utm_source=adwords&utm_medium=ppc&hsa_acc=7964138385&hsa_cam=11384329873&hsa_grp=111087461203&hsa_ad=687448474447&hsa_src=g&hsa_tgt=dsa-2276348409543&hsa_kw=&hsa_mt=&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=CjwKCAjw5v2wBhBrEiwAXDDoJRPyar5zI6T2H0T9szwbbCXalEgHMLaWO0WNH7E5djjv-XbWRGNUiRoC0WQQAvD_BwE
