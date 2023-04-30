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

function getDayName(dateStr, locale)
{   
    dateStr = dateStr.split("-")
    dateStr = `${dateStr[1]}/${dateStr[2]}/${dateStr[0]}`
    var date = new Date(dateStr);
    return date.toLocaleDateString(locale, { weekday: 'long' });        
};


function setup(){
    fetch("https://api.weatherapi.com/v1/forecast.json?key=d416a137d8604eae881223651231803&q=Rozprza&days=5&aqi=yes&alerts=yes")
    .then(elm => elm.json())
    .then(elm => {
        let okienka = Array.from(document.getElementsByClassName("sector"));
        console.log(okienka);
        for (let i = 0; i < okienka.length; i++) {

            okienka[i].getElementsByTagName("label")[0].innerText = getDayName(elm['forecast']['forecastday'][i]['date'],"pl-PL")
            okienka[i].getElementsByTagName("label")[1].innerText = ((elm['forecast']['forecastday'][i]['date']).split("-").slice(1,3).reverse()).join("-")
            okienka[i].getElementsByTagName("label")[0].setAttribute("data-text",getDayName(elm['forecast']['forecastday'][i]['date'],"pl-PL"))
            okienka[i].getElementsByTagName("label")[1].setAttribute("data-text",((elm['forecast']['forecastday'][i]['date']).split("-").slice(1,3).reverse()).join("-"))
            okienka[i].setAttribute("data-temp",`${elm['forecast']['forecastday'][i]['day']['mintemp_c']}°C - ${elm['forecast']['forecastday'][i]['day']['maxtemp_c']}°C`)
            okienka[i].getElementsByTagName("img")[0].src = elm['forecast']['forecastday'][i]['day']['condition']['icon']
        }
        document.getElementById("main_graph_container").setAttribute("data-ready","1")

    })
};

addFunctionOnWindowLoad(init);