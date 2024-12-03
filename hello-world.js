class HelloWorld extends HTMLElement {
    constructor() {
        super();
    }

    /**
     * connected callback
     */
    connectedCallback() {
        this.innerHTML = `<p>Hello World</p> <p>${this.getAttribute('name')}</p>`;
        console.log("This is example");
    }

}

customElements.define('hello-world', HelloWorld);