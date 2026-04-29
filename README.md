# 🌞 Desbravando Pernambuco 🌴

Bem-vindo ao **Desbravando Pernambuco**, um jogo web educativo e interativo desenvolvido para testar e expandir os conhecimentos sobre a rica história, geografia, economia e cultura do estado de Pernambuco.

🌍 **Jogue agora:** [Clique aqui para acessar o jogo](https://badadia.github.io/Desbravando-Pernambuco/)

---

## 🎮 Como funciona o jogo?

O jogador é desafiado através de uma série de perguntas de múltipla escolha e **questões de localização geográfica**. O grande diferencial do jogo é o seu **Mapa Interativo**: em determinadas perguntas, as alternativas textuais somem e o jogador precisa clicar exatamente na mesorregião correspondente (Sertão, São Francisco, Agreste, Zona da Mata ou RMR) em um mapa de Pernambuco para responder.

A cada partida, o sistema sorteia **9 perguntas aleatórias** (3 fáceis, 3 médias e 3 difíceis) do banco de dados, garantindo que uma partida nunca seja igual à outra!

---

## 🚀 Destaques Técnicos

Este projeto foi construído utilizando apenas tecnologias front-end nativas, focando em performance e acessibilidade:

- **Arquitetura em Camadas:** O código foi dividido entre Estrutura (`HTML`), Estilo (`CSS`) e Lógica (`JavaScript`).
- **Mapa SVG Interativo e Otimizado:** O mapa de Pernambuco não é uma imagem comum (`.png` ou `.jpg`). Foi construído nativamente em **SVG (Scalable Vector Graphics)** através da matemática de coordenadas. Isso permite manipulação pelo DOM, detecção de cliques por polígonos irregulares exatos e escalabilidade infinita sem perda de qualidade.
- **Fetch API & Delegação de Eventos:** O SVG é injetado dinamicamente na página via `fetch()`, mantendo o HTML limpo. Os cliques no mapa são gerenciados usando a técnica de _Event Delegation_ para máxima performance de memória.
- **Design Responsivo & UI/UX:** Interface limpa construída com **Bootstrap 5**, com modais customizados de feedback substituindo os alertas nativos do navegador.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5** (Semântica e estruturação)
- **CSS3** (Estilização avançada e animações de interface)
- **JavaScript (ES6+)** (Lógica do jogo, manipulação do DOM e requisições assíncronas)
- **Bootstrap 5** (Framework para responsividade e design de componentes)
- **SVG** (Renderização gráfica vetorial interativa)

---

## 📁 Estrutura do Projeto

```text
📦 desbravando-pernambuco
 ┣ 📜 index.html         # Estrutura principal do jogo (Single Page)
 ┣ 📜 style.css          # Estilizações globais, cores e animações
 ┣ 📜 script.js          # Banco de questões, lógica de sorteio e controle de pontuação
 ┣ 📜 mapa_processed.svg # Mapa vetorial de PE com data-attributes nas mesorregiões
 ┗ 📜 README.md          # Documentação do projeto
```
