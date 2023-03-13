function validar(self) {
    const names=["primero", "segundo", "bebida", "postre"];
    let resultado = { primero:{}, segundo:{}, bebida:{}, postre:{} };
    let productos = []
    
    self.querySelectorAll('comanda-productos').forEach(cp => {
        //productos.push(cp.shadowRoot.querySelector('select'))
        var curr = cp.shadowRoot.querySelector('select');
        resultado[curr.id] = JSON.parse( curr.value );
    });
    /*
    productos.forEach( p => {
        resultado[p.id] = JSON.parse(p.value);
    });
    */
    crearRecivo(resultado);
    return false;
}
function crearRecivo(res) {
    let h1 = document.createElement('h1');
    let recivo = document.createElement('comanda-recivo');
    h1.innerText='Recivo comanda';
    recivo.dataset.json = JSON.stringify(res);

    if (recivoExists()) {
        document.body.replaceChild(recivo, document.querySelector('comanda-recivo'));
    } else {
        document.body.appendChild(h1);
        document.body.appendChild(recivo);
    }
}

function recivoExists() {
    return document.querySelector('comanda-recivo') != null;
}