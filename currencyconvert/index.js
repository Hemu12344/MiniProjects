const countryList = {
    AED: "AE",
    AFN: "AF",
    XCD: "AG",
    ALL: "AL",
    AMD: "AM",
    ANG: "AN",
    AOA: "AO",
    AQD: "AQ",
    ARS: "AR",
    AUD: "AU",
    AZN: "AZ",
    BAM: "BA",
    BBD: "BB",
    BDT: "BD",
    XOF: "BE",
    BGN: "BG",
    BHD: "BH",
    BIF: "BI",
    BMD: "BM",
    BND: "BN",
    BOB: "BO",
    BRL: "BR",
    BSD: "BS",
    NOK: "BV",
    BWP: "BW",
    BYR: "BY",
    BZD: "BZ",
    CAD: "CA",
    CDF: "CD",
    XAF: "CF",
    CHF: "CH",
    CLP: "CL",
    CNY: "CN",
    COP: "CO",
    CRC: "CR",
    CUP: "CU",
    CVE: "CV",
    CYP: "CY",
    CZK: "CZ",
    DJF: "DJ",
    DKK: "DK",
    DOP: "DO",
    DZD: "DZ",
    ECS: "EC",
    EEK: "EE",
    EGP: "EG",
    ETB: "ET",
    EUR: "FR",
    FJD: "FJ",
    FKP: "FK",
    GBP: "GB",
    GEL: "GE",
    GGP: "GG",
    GHS: "GH",
    GIP: "GI",
    GMD: "GM",
    GNF: "GN",
    GTQ: "GT",
    GYD: "GY",
    HKD: "HK",
    HNL: "HN",
    HRK: "HR",
    HTG: "HT",
    HUF: "HU",
    IDR: "ID",
    ILS: "IL",
    INR: "IN",
    IQD: "IQ",
    IRR: "IR",
    ISK: "IS",
    JMD: "JM",
    JOD: "JO",
    JPY: "JP",
    KES: "KE",
    KGS: "KG",
    KHR: "KH",
    KMF: "KM",
    KPW: "KP",
    KRW: "KR",
    KWD: "KW",
    KYD: "KY",
    KZT: "KZ",
    LAK: "LA",
    LBP: "LB",
    LKR: "LK",
    LRD: "LR",
    LSL: "LS",
    LTL: "LT",
    LVL: "LV",
    LYD: "LY",
    MAD: "MA",
    MDL: "MD",
    MGA: "MG",
    MKD: "MK",
    MMK: "MM",
    MNT: "MN",
    MOP: "MO",
    MRO: "MR",
    MTL: "MT",
    MUR: "MU",
    MVR: "MV",
    MWK: "MW",
    MXN: "MX",
    MYR: "MY",
    MZN: "MZ",
    NAD: "NA",
    XPF: "NC",
    NGN: "NG",
    NIO: "NI",
    NPR: "NP",
    NZD: "NZ",
    OMR: "OM",
    PAB: "PA",
    PEN: "PE",
    PGK: "PG",
    PHP: "PH",
    PKR: "PK",
    PLN: "PL",
    PYG: "PY",
    QAR: "QA",
    RON: "RO",
    RSD: "RS",
    RUB: "RU",
    RWF: "RW",
    SAR: "SA",
    SBD: "SB",
    SCR: "SC",
    SDG: "SD",
    SEK: "SE",
    SGD: "SG",
    SKK: "SK",
    SLL: "SL",
    SOS: "SO",
    SRD: "SR",
    STD: "ST",
    SVC: "SV",
    SYP: "SY",
    SZL: "SZ",
    THB: "TH",
    TJS: "TJ",
    TMT: "TM",
    TND: "TN",
    TOP: "TO",
    TRY: "TR",
    TTD: "TT",
    TWD: "TW",
    TZS: "TZ",
    UAH: "UA",
    UGX: "UG",
    USD: "US",
    UYU: "UY",
    UZS: "UZ",
    VEF: "VE",
    VND: "VN",
    VUV: "VU",
    YER: "YE",
    ZAR: "ZA",
    ZMK: "ZM",
    ZWD: "ZW",
  };



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
