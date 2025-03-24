# Desafio Linguagem Favorita

## Descrição do Projeto
Este projeto é uma aplicação front-end simples desenvolvida com React que permite aos usuários escolherem sua linguagem de programação favorita. Quando o usuário seleciona uma linguagem, um pop-up (alerta) é exibido na tela destacando a linguagem escolhida.

## Regras de Negócio
- O usuário pode escolher entre três linguagens de programação: **JavaScript, Python e Java**.
- Ao clicar em uma opção, um alerta é exibido mostrando a linguagem selecionada.
- Interface simples e intuitiva com botões para cada opção.

## Tecnologias Utilizadas
- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Create React App**: Ferramenta para inicialização rápida de projetos React.
- **JavaScript**: Linguagem de programação principal.
- **CSS**: Estilização básica dos componentes.
- **Jest/Testing Library**: Configurado para testes (não implementados no código atual).

## Estrutura do Projeto
```
desafio-linguagem-favorita/
├── public/                  # Arquivos públicos
├── src/                     # Código fonte
│   ├── App.js               # Componente principal
│   ├── App.css              # Estilos do componente principal
│   ├── index.js             # Ponto de entrada da aplicação
│   ├── logo.svg             # Logo do React
│   ├── reportWebVitals.js   # Métricas de performance
│   └── setupTests.js        # Configuração de testes
├── README.md                # Documentação do projeto
└── package.json             # Dependências e scripts
```

## Funcionalidades
- Exibição de um título perguntando sobre a linguagem favorita.
- Três botões representando as opções de linguagens (**JavaScript, Python e Java**).
- Exibição de um alerta quando uma opção é selecionada.

## Passo a Passo para Executar o Programa

### Pré-requisitos
- **Node.js** (versão 14 ou superior).
- **npm** (gerenciador de pacotes do Node.js).

### Instalação
1. Clone o repositório:
   ```sh
   git clone https://github.com/renansistemas/desafio-linguagem-favorita.git
   ```
2. Navegue até o diretório do projeto:
   ```sh
   cd desafio-linguagem-favorita
   ```
3. Instale as dependências:
   ```sh
   npm install
   ```

### Execução
Para iniciar a aplicação em modo de desenvolvimento, execute:
```sh
npm start
```
A aplicação será aberta automaticamente no navegador no endereço [http://localhost:3000](http://localhost:3000).

### Testes
Para executar os testes (caso sejam implementados), utilize:
```sh
npm test
```

### Build para Produção
Para criar uma versão otimizada para produção, utilize:
```sh
npm run build
```
Os arquivos serão gerados no diretório `build/`.

## Possíveis Melhorias
- Adicionar mais opções de linguagens.
- Implementar um sistema de armazenamento das escolhas (localStorage ou backend).
- Criar uma visualização de estatísticas das linguagens mais votadas.
- Melhorar o design visual com CSS mais elaborado ou frameworks como **Material-UI**.
- Implementar testes unitários e de integração.
- Adicionar responsividade para dispositivos móveis.

## Autor
**Renan**