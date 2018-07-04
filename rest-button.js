export class RestButton extends HTMLElement {

    constructor() {
        super();
        this._initWork();
    }

    connectedCallback() {

    }

    disconnectedCallback() {
        
    }

    _initWork() {
        let baseTemplate = document.createElement('template');
        baseTemplate.innerHTML = this._renderElement();
        let shadowRoot = this.attachShadow({mode:'open'});
        shadowRoot.appendChild(document.importNode(baseTemplate.content, true));
    }

    _renderElement() {
        return `
        <style>
        </style>
        <button type="button">
            <slot></slot>
        </button>
        `
    }

}

customElements.define("rest-button", RestButton);