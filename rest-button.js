import {PolymerElement, html} from '@polymer/polymer';

export class RestButton extends PolymerElement {

    constructor() {
        super();
        
    }

    static get template () {
        return html `
        <style>
        </style>
        <button type="button">
            <slot></slot>
        </button>
        `
    }

}

customElements.define("rest-button", RestButton);