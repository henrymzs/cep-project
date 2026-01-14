# App de Clima

Este é um **projeto de consulta de CEP** utilizando a [BrasilAPI](https://brasilapi.com.br/docs#tag/CEP), com o objetivo de exibir informações sobre a **localização** do usuário com base no CEP digitado.

## Tecnologias Utilizadas

- **HTML** → Estrutura da página.
- **CSS** → Estilização e centralização dos elementos.
- **JavaScript** → Lógica de busca e integração com a API BrasilAPI.

## Estrutura do Projeto

O projeto foi desenvolvido em **apenas um arquivo**, contendo:
- Um **campo de entrada** (`input`) onde o usuário digita o CEP.
- Um **botão de pesquisa** que aciona a requisição da API.
- Um **container de resultados**, onde são exibidos os dados do CEP consultado.

## Estilização

- Todos os elementos estão **centralizados** na tela.
- As cores foram inspiradas em outro projeto que achei legal.
- O design é **simples**, focado apenas na funcionalidade principal.

## Como Funciona?

1. O usuário digita um **CEP válido (8 dígitos)**.
2. Clica no botão **"Pesquisar"**.
3. O JavaScript faz a requisição à BrasilAPI.
4. Se o CEP for válido, exibe informações como:
   - **Estado**
   - **Cidade**
   - **Bairro**
5. Caso o CEP esteja incorreto, o usuário recebe um aviso.
