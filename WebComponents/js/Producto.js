class Producto extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({
            mode: 'open'
        });
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }
    connectedCallback() {
        let json = JSON.parse(this.dataset.json);

        this.shadowRoot.querySelector('label').innerText = `${json.nombre}:`;
        this.shadowRoot.querySelector('label').classList.add('label');
        
        this.shadowRoot.querySelector('select').id = `${json.id}`;

        this.getOptions(json.productos).forEach(option => {
            this.shadowRoot.querySelector('select').appendChild(option);
        })
    }
    disconnectedCallback() {}
    getOptions(json) {
        let options = [];
        var op;
        for (var prod of json) {
            op = document.createElement('option');
            op.value = JSON.stringify(prod);
            op.innerText = prod.nombre;
            options.push(op)
        }
        return options;
    }
    getTemplate() {
        let temp = document.createElement('template')
        temp.innerHTML = `
        <link rel="stylesheet" href="css/Producto.css">
        <div class="container">
            <label class="" for=""></label>
            <select name="" id="">
                [options]
            </select>
        </div>`;
        return temp;
    }
}
customElements.define('comanda-productos', Producto);