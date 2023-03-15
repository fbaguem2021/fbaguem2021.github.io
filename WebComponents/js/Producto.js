const json_productos = await readJson();
export class Producto extends HTMLElement {
    constructor() {
        super()
    }
    connectedCallback() {
        this.appendChild(this.getTemplate().content.cloneNode(true))
        const self = this
        const label = self.querySelector('label')
        const select = self.querySelector('select')
        
        const json = json_productos[this.getTtipo()]

        this.querySelector('label').innerText = `${json.nombre}:`
        this.querySelector('label').classList.add('label')
        this.querySelector('select').id = `${json.id}`

        this.getOptions(json.productos).forEach(option => {
            self.querySelector('select').appendChild(option)
        })
        let previousvalue = select.value;
        this.querySelector('select').addEventListener('change', (event) => {
            let id = `#${self.querySelector('select').id}`
            let currvalue = select.value
            let precio = JSON.parse(currvalue)["precio"]
            let nombre = JSON.parse(currvalue)["nombre"]
            let result = document.querySelector(`.resultado > ${id}`);
            let total  = document.querySelector('.resultado > #total')

            result.setAttribute('precio', precio)
            if (precio == 0) {
                result.setAttribute('producto', 'Ninguno')
            } else {
                result.setAttribute('producto', nombre)
            }

            const pre_tot = parseFloat(total.getAttribute('precio'))
            let new_tot = pre_tot + precio
            if (JSON.parse(previousvalue)['precio'] != 0){
                new_tot -= JSON.parse(previousvalue)['precio']
            }
            total.setAttribute('precio', new_tot.toFixed(2))

            previousvalue = currvalue
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
        <!-- <link rel="stylesheet" href="css/Producto.css"> -->
        <div class="container">
            <label class="" for=""></label>
            <select name="" id="">
                [options]
            </select>
        </div>`;
        return temp;
    }
    getTtipo() {
        const type = this.getAttribute('tipo-producto')
        if (type == "primero")
            return 0
        if (type == "segundo")
            return 1
        if (type == "bebida")
            return 2
        if (type == "postre")
            return 3
    }
}
customElements.define('comanda-productos', Producto);