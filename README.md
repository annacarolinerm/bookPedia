# BookPedia

BookPedia é uma aplicação web desenvolvida em Angular que permite a busca de livros utilizando a API pública do Google Books. O sistema oferece uma interface simples e responsiva para que usuários possam pesquisar livros por título, autor ou assunto, visualizar resultados paginados e acessar informações detalhadas das obras.

## Funcionalidades

- Busca de livros por texto livre (título, autor, gênero).  
- Paginação dos resultados para facilitar a navegação.  
- Exibição dos principais dados dos livros, como título e autores.  
- Tratamento de erros básicos para informar o usuário.  
- Interface responsiva e amigável.

## Tecnologias Utilizadas

- Angular 14  
- TypeScript  
- RxJS para programação reativa  
- Google Books API  
- PrimeNG para componentes UI (paginador)  
- HTML e CSS para layout e estilo

## Como Rodar o Projeto

### Pré-requisitos

- Node.js (v14 ou superior)  
- Angular CLI

### Passos

1. Clone o repositório:  
```bash
git clone [URL_DO_REPOSITÓRIO]
```

2. Acesse a pasta do projeto:  
```bash
cd BookPedia
```

3. Instale as dependências:  
```bash
npm install
```

4. Execute a aplicação:  
```bash
ng serve
```

5. Abra o navegador e acesse:  
```
http://localhost:4200
```

## Estrutura do Projeto

- `src/app/components` — componentes Angular que compõem a interface, incluindo a lista de livros.  
- `src/app/services` — serviços Angular responsáveis por acessar a API do Google Books e fornecer dados ao frontend.  
- `src/app/models` — modelos TypeScript para tipagem dos dados do livro.  
- `src/assets` — arquivos estáticos como imagens e estilos.

## Observações

- O projeto pode ser expandido futuramente com funcionalidades como busca por IA, login, histórico, entre outras.  
- Atualmente, o foco está na busca simples e exibição dos livros via API Google Books.

## Link Documentação

https://docs.google.com/document/d/1iLwWgIi3V-NJemCN0kmO6l7KxLZCkvzmgRqyGt2AppM/edit?usp=sharing