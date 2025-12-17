let allImg = document.querySelectorAll(".allbox img")
let from = document.querySelector("#from select")

let all = document.querySelectorAll(".allbox select")
let url ="https://api.exchangerate-api.com/v4/latest"

for(let select of all){
    for(code in countryList){
        let newOption = document.createElement("option")
        newOption.innerText=`${code}  TO ${countryList[code]}`
        newOption.setAttribute("class",`${code}`)
        newOption.classList.add(code)
        newOption.value=code
        if(select.name==="from" && code==="USD"){
            newOption.selected="selected"
        }else if(select.name==="to" && code==="INR"){
            newOption.selected="selected"
        }
        select.appendChild(newOption)
    }
    select.addEventListener("change",(e)=>{
        cunCode(e.target)
    })
}

let cunCode =(eve)=>{
    let curCode =eve.value
    let cunCode =countryList[curCode]
    let newSrc =`https://flagsapi.com/${cunCode}/flat/64.png`
    let img = eve.parentElement.querySelector("img")
    img.src=newSrc
}

let button = document.querySelector(".btnn")
let getData=async()=>{
    n = `${url}/${all[0].value}`
    da =  await fetch(n)
    respo = await da.json()
    frm = respo.rates[from]
    rateAmount=respo.rates[getRate]
    val.innerText=`${amm} ${fro} IN ${getRate} = ${rateAmount*amm}`
}
let da
let respo
let getRate=all[1].value
let fro=all[0].value
let val=document.querySelector(".value")
let n
let data =document.querySelector("input")
let ammount=1
let amm=Number(ammount)
let frm
let rateAmount
getData()
let btn= async ()=>{
    button.addEventListener("click", async(evt)=>{
        evt.preventDefault();
        ammount=data.value
        amm =Number(ammount)
        if(amm==="" || amm<=0){
            amm=1
            data.value=1
        }
        data.value=null
        getRate =all[1].value
        fro=all[0].value
        val =document.querySelector(".value")
        n = `${url}/${all[0].value}`
        let da =  await fetch(n)
        respo = await da.json()
        frm = respo.rates[from]
        rateAmount=respo.rates[getRate]
        val.innerText=`${amm} ${fro} IN ${getRate} = ${rateAmount*amm}`
    })
}
btn()
