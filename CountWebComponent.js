class CountWebComponent extends HTMLElement {
    constructor() {
        super();
        console.log("Calling from constructor");
        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._shadowRoot.innerHTML = 
        `<button id="decrement">-</button>
        <span id="counter">0</span>
        <button id="increment">+</button>`

        this.countElement = this._shadowRoot.querySelector('#counter');
        this.decrementMethod = this._shadowRoot.querySelector('#decrement');
        this.incrementMethod = this._shadowRoot.querySelector('#increment');
    }

    static get observedAttributes() {
        return ['steps', 'initialValue'];
    }

    get steps() {
        return this.getAttribute('steps');
    }

    get initialValue() {
        return this.getAttribute('initialValue');
    }

    set steps(value) {
        value ? this.setAttribute('steps') : this.removeAttribute('steps');
    }

    set initialValue(value) {
        value ? this.setAttribute('initialValue') : this.removeAttribute('initialValue');
    }

    connectedCallback() {
        console.log("calling from connectedCallback");
        this.counter = this.initialValue || 0;
        this.countElement.innerHTML = this.counter;

        this.decrementMethod.addEventListener("click",this.decrementValue.bind(this));
        this.incrementMethod.addEventListener("click",this.incrementValue.bind(this));
    }

    decrementValue(){
        this.counter = +this.counter - +this.steps;
        this.countElement.innerHTML = this.counter;
    }

    incrementValue(){
        this.counter = +this.counter + +this.steps;
        this.countElement.innerHTML = this.counter;
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log(`calling from attributeChangedCallback with ${name} having oldvalues as ${oldValue} with new value ${newValue}`);
    }

    disconnectedCallback() {
        console.log("calling from disconnectedCallback");
        this.decrementMethod.removeEventListener("click",this.decrementValue.bind(this));
        this.incrementMethod.removeEventListener("click",this.incrementValue.bind(this));
    }

}

customElements.define('count-webcomponent', CountWebComponent);
