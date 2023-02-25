// let checkdir = window.location.pathname.includes(`timer/index.html`);
// let returndir;
// if (checkdir) {
//     returndir === `../`;
//     console.log(returndir);
// }
class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
    < header >
    <div class="container">

        <a href="index.html">
            <h2 class="logo">Poula</h2>
        </a>

        <i class="fa-solid fa-bars"></i>
        <nav>
            <ul class="navigations">
                <li>
                    <a href="#skills-section">Skills</a>
                </li>
                <li>
                    <a href="#projects-section">Projects</a>
                </li>
                <li>
                    <a href="contact-me.html" class="active">Contact Me</a>
                </li>
            </ul>
        </nav>
    </div>
    </header >
    `;
    }
}
customElements.define('my-header', MyHeader);

// <my-header></my-header>