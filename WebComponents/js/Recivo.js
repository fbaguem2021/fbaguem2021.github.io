const json_productos = await readJson();
class Recivo extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.appendChild(this.getTemplate().content.cloneNode(true));
    }
    disconnectedCallback() {}
    getTemplate() {
        let temp = document.createElement('template')
        temp.innerHTML = `
        <div class="resultado">
            <pre id="primero" precio="0" producto="Ninguno"></pre>
            <pre id="segundo" precio="0" producto="Ninguno"></pre>
            <pre id="bebida"  precio="0" producto="Ninguno"></pre>
            <pre id="postre"  precio="0" producto="Ninguno"></pre>
            <pre id="total"   precio="0.00"></pre>
        </div>`;
        return temp;
    }
}
customElements.define('comanda-recivo', Recivo);