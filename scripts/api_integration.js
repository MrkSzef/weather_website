function getDayName(dateStr, locale)
{   
    dateStr = dateStr.split("-")
    dateStr = `${dateStr[1]}/${dateStr[2]}/${dateStr[0]}`
    var date = new Date(dateStr);
    return date.toLocaleDateString(locale, { weekday: 'long' });        
}

export const get_info = (query) =>{
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=d416a137d8604eae881223651231803&q=${query}&days=5&aqi=yes&alerts=yes`, {
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin':'*'
        }
      })
    .then(element => element.json())
    .then(element => {
        document.getElementById("humidity2").innerText = `${element['current']['humidity']}%`
        document.getElementById("wind2").innerText = `${element['current']['wind_kph']} km\h`
        document.getElementById("ftemp2").innerText = `${element['current']['feelslike_c']} °C`
        document.getElementById("temp2").innerText = `${element['current']['temp_c']} °C`
        document.getElementById("wind_dir2").innerText = `${element['current']['wind_degree']}°`
        document.getElementById("visibility2").innerText = `${element['current']['vis_km']} km`
        document.getElementById("inner211").src = element['current']['condition']['icon']
        document.getElementById("inner211").alt = element['current']['condition']['text']
        //document.getElementById("country2").innerText = `${element['location']['country']}`
        //document.getElementById("local_time2").innerText = `${element['location']['localtime']}`

        document.getElementsByClassName("Main_container")[0].setAttribute("data-position","1")
        setTimeout(function(){
            //document.getElementById("inner2").setAttribute("data-show","1")
            //document.getElementById("inner15").setAttribute("data-show","1")
        },800)
        let okienka = Array.from(document.getElementsByClassName("sector"));
        console.log(okienka);
        for (let i = 0; i < okienka.length; i++) {

            okienka[i].getElementsByTagName("label")[0].innerText = getDayName(element['forecast']['forecastday'][i]['date'],"pl-PL")
            okienka[i].getElementsByTagName("label")[1].innerText = ((element['forecast']['forecastday'][i]['date']).split("-").slice(1,3).reverse()).join("-")
            okienka[i].getElementsByTagName("label")[0].setAttribute("data-text",getDayName(element['forecast']['forecastday'][i]['date'],"pl-PL"))
            okienka[i].getElementsByTagName("label")[1].setAttribute("data-text",((element['forecast']['forecastday'][i]['date']).split("-").slice(1,3).reverse()).join("-"))
            okienka[i].setAttribute("data-temp",`${element['forecast']['forecastday'][i]['day']['mintemp_c']}°C - ${element['forecast']['forecastday'][i]['day']['maxtemp_c']}°C`)
            okienka[i].getElementsByTagName("img")[0].src = element['forecast']['forecastday'][i]['day']['condition']['icon']
        }
        setTimeout(function (){document.getElementById("main_graph_container").setAttribute("data-ready","1")},1200)
        
    })
}