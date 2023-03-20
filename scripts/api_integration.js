export const get_info = (query) =>{
    fetch(`https://api.weatherapi.com/v1/current.json?key=d416a137d8604eae881223651231803 &q=${query}&aqi=no`, {
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
        document.getElementById("country2").innerText = `${element['location']['country']}`
        document.getElementById("local_time2").innerText = `${element['location']['localtime']}`

        document.getElementsByClassName("Main_container")[0].setAttribute("data-position","1")
        setTimeout(function(){
            document.getElementById("inner2").setAttribute("data-show","1")
            document.getElementById("inner15").setAttribute("data-show","1")
        },800)
    })
}