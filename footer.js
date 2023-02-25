class MyFooter extends HTMLElement {
    connectedCallback() {
        this.textContent = `
        <footer>
        <div class="container">

            <div class="footer-icons">
                <a href="contact-me.html"><i class="fa-solid fa-envelope"></i></a>
                <a target="_blank" href="https://www.linkedin.com/in/poula-karem"><i
                        class="fa-brands fa-linkedin"></i></a>
                <a target="_blank" href="https://github.com/Poula-Karem"><i class="fa-brands fa-square-github"></i></a>
            </div>
            <p>&copy; Poula Karem</p>

        </div>
    </footer>
    `;
    }
}
customElements.define('my-footer', MyFooter);