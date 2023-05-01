function init(){
    attachEvent_to_sectors()
};

var addFunctionOnWindowLoad = function(callback){
    if(window.addEventListener){
        window.addEventListener('load',callback,false);
    }else{
        window.attachEvent('onload',callback);
    }
};

function attachEvent_to_sectors()
{
    Array.from(document.getElementsByClassName("sector")).forEach((elm) => {
        elm.addEventListener("click",f = function(){
            if(elm.getAttribute("data-clicked") === "0" || elm.getAttribute("data-clicked") === "2"){
                Array.from(document.getElementsByClassName("sector")).forEach((elm) =>{elm.setAttribute("data-clicked","0")})
                elm.setAttribute("data-clicked","1")
            }
            else{
                elm.setAttribute("data-clicked","2")
            }
        })
    Array.from(document.getElementsByClassName("sector")).forEach((elm) =>{
            elm.addEventListener("mouseover",f=function(){
                checksum = 0
                Array.from(document.getElementsByClassName("sector")).forEach((elm) => {checksum += parseInt(elm.getAttribute("data-clicked"))})
                if(elm.getAttribute("data-clicked") === "0" && checksum === 0){
                    elm.setAttribute("data-clicked","2")
                }
            })
        })
    Array.from(document.getElementsByClassName("sector")).forEach((elm) =>{
            elm.addEventListener("mouseleave",f=function(){
                if(elm.getAttribute("data-clicked") === "2"){
                    elm.setAttribute("data-clicked","0")
                }
            })
        })
    });
};


addFunctionOnWindowLoad(init);