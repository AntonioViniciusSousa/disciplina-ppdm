// contador-botao.js
class ContadorBotao extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    // Estado inicial do contador
    this.contagem = 0;

    // Criando os elementos do componente
    this.shadowRoot.innerHTML = `
        <style>
          .contador-container {
            display: flex;
            align-items: center;
          }
          .contador-valor {
            margin: 0 10px;
            font-size: 1.5em;
          }
          button {
            padding: 5px 10px;
            background-color: black;
            font-size: 1em;
            cursor: pointer;
            color: white;
          }
          #decrementar:hover{
            background-color: red;
          }
          #incrementar:hover{
            background-color: green;
          }
        </style>
        <div class="contador-container">
          <button id="decrementar">-</button>
          <span class="contador-valor">${this.contagem}</span>
          <button id="incrementar">+</button>
        </div>
      `;
  }

  connectedCallback() {
    // Seleciona os botões e adiciona os event listeners
    this.shadowRoot
      .querySelector("#incrementar")
      .addEventListener("click", () => this.incrementar());
    this.shadowRoot
      .querySelector("#decrementar")
      .addEventListener("click", () => this.decrementar());
  }

  // Método para incrementar a contagem
  incrementar() {
    this.contagem++;
    this.atualizarContagem();
  }

  // Método para decrementar a contagem
  decrementar() {
    this.contagem--;
    this.atualizarContagem();
  }

  // Atualiza a exibição do valor da contagem
  atualizarContagem() {
    this.shadowRoot.querySelector(".contador-valor").textContent =
      this.contagem;
  }
}

// Define o novo elemento
customElements.define("contador-botao", ContadorBotao);
