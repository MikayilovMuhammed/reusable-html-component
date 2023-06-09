const footer = `
    <footer>
        <section>
            <h2>Footer</h2>
        </section>
    </footer>
`;

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    ${footer}
    `;
  }
}

customElements.define("footer-component", Footer);
