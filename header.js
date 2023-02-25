class MyHeader extends HTMLElement {
    connectedCallback() {
        this.textContent = `
        <header>
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

            <!-- <i class="fa-solid fa-bars"></i> -->
            <!-- <i class="fa-solid fa-x"></i> -->

        </div>
    </header>
    `;
    }
}
customElements.define('my-header', MyHeader);