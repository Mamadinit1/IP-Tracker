const $ = document;
const url = "https://free.freeipapi.com/api/json";
const cityV = $.querySelector("#cityV");
const countryV = $.querySelector("#countryV");
const continentV = $.querySelector("#continentV");
const ipAddressV = $.querySelector("#ipAddressV");
const searchBtn = $.querySelector(".searchBtn");

window.addEventListener("load", loadIPInfo);
searchBtn.addEventListener("click", loadIPInfo);

async function loadIPInfo() {
  try {
    searchBtn.innerHTML = "📡 Tracking...";
    const response = await fetch(url);
    const data = await response.json();
    const { cityName, continent, countryName, ipAddress } = data;
    loadData({ cityName, continent, countryName, ipAddress });
  } catch (err) {
    searchBtn.innerHTML = "❌ Failed";
    console.log(err);
  }
}

function loadData({ cityName, continent, countryName, ipAddress }) {
  searchBtn.innerHTML = "🌍 TRACK IP";

  cityV.innerHTML = cityName;
  countryV.innerHTML = countryName;
  continentV.innerHTML = continent;
  ipAddressV.innerHTML = ipAddress;
}
