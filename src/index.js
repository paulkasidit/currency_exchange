import exchangeProfile from './js/exchangeProfile.js';
import usdExchangeService from './js/usdExchangeService.js';
//Business Logic  
function printError(error) {
  return `${error}`;
}

function getCurrencyRate(targetCurrency,response){ 
  let rate;
  if (response === undefined){ 
    rate = undefined;
  } else{
    for (const[key,value] of Object.entries(response)){
      if (targetCurrency === key){
        rate = value; 
        return rate;
        }
      }
    }
}

//UI Logic
async function generateConversion(event){
  event.preventDefault();  

  let newExchangeRequest; 
  let newUSDRate = await usdExchangeService.getRatesForUSD(); 
  const amount =  document.getElementById('amount').value;
  const targetCurrency = document.getElementById('targetCurrency').value; 

  let currentRateForUSD = getCurrencyRate(targetCurrency, newUSDRate.conversion_rates); 

  newExchangeRequest = new exchangeProfile(amount,targetCurrency); 

  if  (newUSDRate.result === 'success' && currentRateForUSD !== undefined){
    document.getElementById('convertedAmount').innerText = ((newExchangeRequest.handleConversion(amount,currentRateForUSD)).toFixed(2)) + " " + targetCurrency;
  } else if (newUSDRate.result === 'success' && currentRateForUSD === undefined){
    document.getElementById('convertedAmount').innerText = "Please enter a supported currency";
  } else {
    document.getElementById('convertedAmount').innerText = printError(newUSDRate);
  }

  let totalArea = document.getElementById("output-area"); 
  totalArea.removeAttribute("style");
}

window.addEventListener("load", function() {

  let outputArea = document.getElementById("output-area"); 
  outputArea.style.display = "none";

  const form  = document.getElementById("conversionForm"); 
  form.addEventListener("submit", generateConversion);
  }
);
