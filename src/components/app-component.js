class AppComponent extends HTMLElement {
  state = {
    isShowedModal: false,
  };

  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
    document
      .querySelector("#modalBtn")
      .addEventListener("click", this.onClick.bind(this));
  }

  onClick() {
    this.state.isShowedModal = !this.state.isShowedModal;
    this.render();
  }

  render() {
    this.innerHTML = `
        <main>
          <button id="modalBtn">Change modal state</button>
          ${this.state.isShowedModal ? "MMM" : ""}
        </main>
      `;
  }
}

customElements.define("app-component", AppComponent);
