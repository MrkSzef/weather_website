import { get_info } from './api_integration.js';

window.onload = function(){
    document.getElementsByClassName("search_widget")[0].addEventListener("click",open_close)
    document.getElementsByClassName("search_widget")[0].addEventListener("mouseleave",function () {
        if(document.getElementsByClassName("search_bar")[0].value == ""){
            close_search()
        };
    });
    document.getElementsByClassName("search_widget")[0].addEventListener("keypress", function (e) {
        if (e.key === 'Enter') {
            close_search()
        };
    });
    function open_close(){
        let elm = document.getElementsByClassName("search_widget")[0]
        if(elm.getAttribute("data-is-clicked").valueOf() == "0"){
            elm.setAttribute("data-is-clicked","1");
            document.getElementsByClassName("search_bar")[0].focus()
            document.getElementsByClassName("search_widget")[0].removeEventListener("click",open_close)
        } 
        else{
            elm.setAttribute("data-is-clicked","0");
            document.getElementsByClassName("search_bar")[0].blur()
            document.getElementsByClassName("search_widget")[0].addEventListener("click",open_close)
        }
    }; 
    function close_search(){
        let elm = document.getElementsByClassName("search_widget")[0]
        if(elm.getAttribute("data-is-clicked").valueOf() == "1"){
            if(document.getElementsByClassName("search_bar")[0].value != ""){
                get_info(document.getElementsByClassName("search_bar")[0].value);
                
            }else{
            elm.setAttribute("data-is-clicked","0");
            }
            document.getElementsByClassName("search_bar")[0].blur()
            document.getElementsByClassName("search_widget")[0].addEventListener("click",open_close)
        }
    };

}