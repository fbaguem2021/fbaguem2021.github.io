function loadHTML(id, path) {
    $(function(){
        $(`#${id}`).load(`${path}`); 
    });
}

// $(function(){
//     $("#navbar").load("./views/menu.html"); 
// });