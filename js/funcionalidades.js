/**
 * @author Francesc Bagué Martí
 * @param {string} q This is the query to search in the html file
 * @returns {Element|null|NodeListOf<Element>}
 */
function $(q){
    const result = document.querySelectorAll(q)
    return result&&0!==result.length?1===result.length?result[0]:result:null
}
// /**
//  * @author Francesc Bagué Marti
//  * @param {string} q 
//  * @returns {Element|null|NodeListOf<Element}
//  */
// HTMLElement.prototype.$=function(q){
//     let result = this.querySelectorAll(q)
//     return result&&0!==result.length?1===result.length?result[0]:result:null
// }
function readFile(f, id) {
    if (f) {
        fetch(f)
        .then(response => response.blob())
        .then(blob => new File([blob], 'html-templates.txt', {type: 'text/plain'}))
        .then(file => {
            const reader = new FileReader()
            reader.onload = function(e) {
                const contents = e.target.result
                if (id) {
                    const menu = document.getElementById(id)
                    menu.innerHTML = contents
                }
                // console.log(contents);
            }
            reader.readAsText(file)
        })
    }
}
// function loadHTML(id, path) {
//     $(function(){
//         $(`#${id}`).load(`${path}`); 
//     });
// }
// $(function(){
//     $("#navbar").load("./views/menu.html"); 
// });