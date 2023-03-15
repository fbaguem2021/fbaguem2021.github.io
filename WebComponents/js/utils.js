// (async function(){
//     fetch('http://127.0.0.1:5555/WebComponents/platos.json')
//                     .then((response) => response.json())
//                     .then((json_res) => json = json_res)
// })();
async function readJson() {
    const response = await fetch('http://127.0.0.1:5555/WebComponents/platos.json')
        // .then((response) => response.json())
    return response.json();
}
