class TemplateExample  extends HTMLElement {
    constructor() {
        super();

        const templateId = document.getElementById('templateExample');
        const node = document.importNode(templateId.content, true);
        document.body.appendChild(node);

        this.createTemplateNode(); // we will use this here
    }

    createTemplateNode() {
        const templateElement = document.createElement('template')
        templateElement.innerHTML = '<p>Hello, This is custom template!</p>';

        //clone node
        const node = document.importNode(templateElement.content, true);

        //adding node to the DOM
        document.body.appendChild(node);
    }
    
}

customElements.define('template-example',TemplateExample);