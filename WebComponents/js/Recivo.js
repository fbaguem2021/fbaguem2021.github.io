class Recivo extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({
            mode: 'open'
        });
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }
    connectedCallback(){
        let json = JSON.parse(this.dataset.json);

        this.getPrecios(json).forEach( precio => {
            this.shadowRoot.querySelector('.resultado').appendChild(precio);
        });
        
    }
    getTemplate() {
        let temp = document.createElement('template')
        temp.innerHTML = `
        <link rel="stylesheet" href="css/Recivo.css">
        <div class="resultado">
            
        </div>`;
        return temp;
    }
    getPrecios(json) {
        const precios = [];
        let total = 0;
        var pr, prTotal;
        
        for (var prod in json) {
            pr = document.createElement('pre');
            pr.id = prod;
            pr.innerText = `${json[prod].precio} €`;

            precios.push(pr);
            total += json[prod].precio;
        }
        prTotal = document.createElement('pre');
        prTotal.id = 'total';
        prTotal.innerText = `${total} €`;
        precios.push(prTotal);

        return precios;
    }
    disconnectedCallback() {

    }
}
customElements.define('comanda-recivo', Recivo);