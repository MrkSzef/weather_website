var addFunctionOnWindowLoad = function(callback){
    if(window.addEventListener){
        window.addEventListener('load',callback,false);
    }else{
        window.attachEvent('onload',callback);
    }
}

function setup() {
    fetch("./config.json").then(element => element.json())
    .then(element => {
        if (element['dev']) {
            document.getElementById("inner15").setAttribute("data-show","1")
            //document.getElementById("inner2").setAttribute("data-show","1")
            document.getElementsByClassName("Main_container")[0].setAttribute("data-position","1")
            document.getElementById('main_graph_container').setAttribute("data-ready","1")
        }
    })
}
addFunctionOnWindowLoad(setup)