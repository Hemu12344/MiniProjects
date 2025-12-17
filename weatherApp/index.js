const url = 'https://api.openweathermap.org/data/2.5/';
const apiKey ='076875ae1d4a4ccce22be47d39727571'
let srchBtn = document.querySelector(".serch")
let city=document.querySelector("input")
let cityName
let Url
let showdata =document.querySelector(".alldata")
let cityy=document.querySelector(".ctt")
let dat=document.querySelector(".date")
let response
let result
let timezone= new Date().toLocaleTimeString()
let zon=timezone.substring(8)
// console.log(timezone)
let cld
let erro = document.querySelector(".error")
let img=document.querySelector(".cldImg")
let thinker = document.querySelector("#searchThink")
document.addEventListener('contextmenu', event => {
    event.preventDefault();
});

document.querySelectorAll('.disabled').forEach(element => {
    element.style.pointerEvents = 'none';
});
city.addEventListener("keydown", async(eve)=>{
    if(eve.key==='Enter'){
        eve.preventDefault()
        let city=document.querySelector("input")
        cityName = city.value
        if(cityName===""){
            city.value="Mathura"
            cityName ="Mathura"
        }else{
            city.value=""
        }
        cld = document.querySelector(".tem")
        Url =`${url}/weather?q=${cityName}&appid=${apiKey}&units=metric`
        response = await fetch(Url);
        let state = response.status;
        result = await response.json();
        if(state===404){
            erro.style.display="block"
            showdata.style.display="none"
            thinker.style.display="none"
        }
        const {
            name:country,
            main:{temp,humidity},
            weather:[{id,main}],
            wind:speed,
            cod
        } = result
        let dis=()=>{
            if(cod===200){
                erro.style.display="none"
                showdata.style.display="block"
                thinker.style.display="none"
            }
        }
        dis()
        function geticon(id){
            if(id<=232) return 'thunderstron.svg'
            if(id<=321) return 'drizzle.svg'
            if( id<=531) return 'rain.svg'
            if( id<=622) return 'snow.svg'
            if( id<=781) return 'atmosphere.svg'
            if( id<=800) return 'clear.svg'
            else return 'clouds.svg'
        }
        img.children[0].src=geticon(id)
        geticon(id)
        let cVal =result.name
        let humi = document.querySelector("#hu")
        let cloud = document.querySelector(".cloud")
        let sped =document.querySelector("#wind")
        cloud.innerText=`${main}`
        cld.textContent=`${Math.floor(temp)} °C`
        cityy.innerText=` ${cVal}`
        humi.innerText=`${humidity}%`
        sped.innerHTML=`${result.wind.speed} M/s`  
        let dtime = new Date()
        let newData = String(dtime)
        let dateTime = newData.substring(0, 10)
        let daTime = document.querySelector(".dateTime")
        daTime.innerText = `${dateTime} ${zon.toLocaleLowerCase()}`  
    }
})
let getCity = async()=>{
    srchBtn.addEventListener("click",async (ev)=>{
        ev.preventDefault()
        let city=document.querySelector("input")
        cityName = city.value
        if(cityName===""){
            city.value="Mathura"
            cityName ="Mathura"
        }else{
            city.value=""
        }
        cld = document.querySelector(".tem")
        Url =`${url}/weather?q=${cityName}&appid=${apiKey}&units=metric`
        response = await fetch(Url);
        let state = response.status;
        result = await response.json();
        if(state===404){
            erro.style.display="block"
            showdata.style.display="none"
            thinker.style.display="none"
        }
        const {
            name:country,
            main:{temp,humidity},
            weather:[{id,main}],
            wind:speed,
            cod
        } = result
        let dis=()=>{
            if(cod===200){
                erro.style.display="none"
                showdata.style.display="block"
                thinker.style.display="none"
            }
        }
        dis()
        function geticon(id){
            if(id<=232) return 'thunderstron.svg'
            if(id<=321) return 'drizzle.svg'
            if( id<=531) return 'rain.svg'
            if( id<=622) return 'snow.svg'
            if( id<=781) return 'atmosphere.svg'
            if( id<=800) return 'clear.svg'
            else return 'clouds.svg'
        }
        img.children[0].src=geticon(id)
        geticon(id)
        let cVal =result.name
        let humi = document.querySelector("#hu")
        let cloud = document.querySelector(".cloud")
        let sped =document.querySelector("#wind")
        cloud.innerText=`${main}`
        cld.textContent=`${Math.floor(temp)} °C`
        cityy.innerText=` ${cVal}`
        humi.innerText=`${humidity}%`
        sped.innerHTML=`${result.wind.speed} M/s`
            let dtime = new Date()
            let newData =String(dtime)
            let dateTime=newData.substring(0,10)
            let daTime =document.querySelector(".dateTime")
            daTime.innerText=`${dateTime}`
    })
}
getCity()