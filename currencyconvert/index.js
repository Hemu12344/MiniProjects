const countryList = {
    AED: "AE", AFN: "AF", XCD: "AG", ALL: "AL", AMD: "AM",
    ANG: "AN", AOA: "AO", AQD: "AQ", ARS: "AR", AUD: "AU",
    AZN: "AZ", BAM: "BA", BBD: "BB", BDT: "BD", XOF: "BE",
    BGN: "BG", BHD: "BH", BIF: "BI", BMD: "BM", BND: "BN",
    BOB: "BO", BRL: "BR", BSD: "BS", NOK: "BV", BWP: "BW",
    BYR: "BY", BZD: "BZ", CAD: "CA", CDF: "CD", XAF: "CF",
    CHF: "CH", CLP: "CL", CNY: "CN", COP: "CO", CRC: "CR",
    CUP: "CU", CVE: "CV", CYP: "CY", CZK: "CZ", DJF: "DJ",
    DKK: "DK", DOP: "DO", DZD: "DZ", ECS: "EC", EEK: "EE",
    EGP: "EG", ETB: "ET", EUR: "FR", FJD: "FJ", FKP: "FK",
    GBP: "GB", GEL: "GE", GGP: "GG", GHS: "GH", GIP: "GI",
    GMD: "GM", GNF: "GN", GTQ: "GT", GYD: "GY", HKD: "HK",
    HNL: "HN", HRK: "HR", HTG: "HT", HUF: "HU", IDR: "ID",
    ILS: "IL", INR: "IN", IQD: "IQ", IRR: "IR", ISK: "IS",
    JMD: "JM", JOD: "JO", JPY: "JP", KES: "KE", KGS: "KG",
    KHR: "KH", KMF: "KM", KPW: "KP", KRW: "KR", KWD: "KW",
    KYD: "KY", KZT: "KZ", LAK: "LA", LBP: "LB", LKR: "LK",
    LRD: "LR", LSL: "LS", LTL: "LT", LVL: "LV", LYD: "LY",
    MAD: "MA", MDL: "MD", MGA: "MG", MKD: "MK", MMK: "MM",
    MNT: "MN", MOP: "MO", MRO: "MR", MTL: "MT", MUR: "MU",
    MVR: "MV", MWK: "MW", MXN: "MX", MYR: "MY", MZN: "MZ",
    NAD: "NA", XPF: "NC", NGN: "NG", NIO: "NI", NPR: "NP",
    NZD: "NZ", OMR: "OM", PAB: "PA", PEN: "PE", PGK: "PG",
    PHP: "PH", PKR: "PK", PLN: "PL", PYG: "PY", QAR: "QA",
    RON: "RO", RSD: "RS", RUB: "RU", RWF: "RW", SAR: "SA",
    SBD: "SB", SCR: "SC", SDG: "SD", SEK: "SE", SGD: "SG",
    SKK: "SK", SLL: "SL", SOS: "SO", SRD: "SR", STD: "ST",
    SVC: "SV", SYP: "SY", SZL: "SZ", THB: "TH", TJS: "TJ",
    TMT: "TM", TND: "TN", TOP: "TO", TRY: "TR", TTD: "TT",
    TWD: "TW", TZS: "TZ", UAH: "UA", UGX: "UG", USD: "US",
    UYU: "UY", UZS: "UZ", VEF: "VE", VND: "VN", VUV: "VU",
    YER: "YE", ZAR: "ZA", ZMK: "ZM", ZWD: "ZW",
};

const selects = document.querySelectorAll(".allbox select");
const imgs = document.querySelectorAll(".allbox img");
const btn = document.querySelector(".btnn");
const exchange = document.getElementById("Exchange");
const input = document.querySelector(".ammount");
const result = document.querySelector(".value");

const API_URL = "https://api.exchangerate-api.com/v4/latest";

// 🔹 Populate dropdowns
for (let select of selects) {
    for (let code in countryList) {
        let option = document.createElement("option");
        option.value = code;
        option.innerText = code;

        if (select.name === "from" && code === "USD") option.selected = true;
        if (select.name === "to" && code === "INR") option.selected = true;

        select.appendChild(option);
    }

    select.addEventListener("change", () => updateFlag(select));
}

// 🔹 Update flag
function updateFlag(select) {
    let countryCode = countryList[select.value];
    let img = select.parentElement.querySelector("img");
    img.src = `https://flagsapi.com/${countryCode}/flat/64.png`;
}

// 🔹 Get exchange rate
async function getRate() {
    let amount = Number(input.value);
    if (!amount || amount <= 0) {
        amount = 1;
        input.value = 1;
    }

    let from = selects[0].value;
    let to = selects[1].value;

    let response = await fetch(`${API_URL}/${from}`);
    let data = await response.json();

    let rate = data.rates[to];
    result.innerText = `${amount} ${from} To ${to} = ${(rate * amount).toFixed(2)}`;
}

// 🔹 Button click
btn.addEventListener("click", (e) => {
    e.preventDefault();
    getRate();
});

// 🔹 Swap currencies (↔)
exchange.addEventListener("click", async () => {
    
    let temp = selects[0].value;
    selects[0].value = selects[1].value;
    selects[1].value = temp;


    updateFlag(selects[0]);
    updateFlag(selects[1]);

    getRate();
});


getRate();
