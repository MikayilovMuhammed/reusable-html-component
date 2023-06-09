class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
          <header>
            <nav>
            <a href="#">Logo</a>
              <ul>
                <li><a href="about.html" class="active">About</a></li>
                <li><a href="work.html">Work</a></li>
                <li><a href="contact.html">Contact</a></li>
              </ul>
              <div>
              <a href="#">Icons</a>
              </div>
            </nav>
          </header>
        `;
  }
}

customElements.define("header-component", Header);
