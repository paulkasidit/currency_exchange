import exchangeProfile from './js/exchangeProfile.js';
import usdExchangeService from './js/usdExchangeService.js';

//Business Logic  
function generateConversion(event) {
  
  event.preventDefault(); 

  let newExchangeRequest; 
  const amount =  document.getElementById('amount').value;
  const targetCurrency = document.getElementById('targetCurrency').value;


  usdExchangeService.getRatesForUSD()
    .then(function(usdExchangeRates){
      
      newExchangeRequest = new exchangeProfile(amount, targetCurrency);

      let currentRateForUSD; 
      if (targetCurrency === 'EUR'){
        currentRateForUSD = usdExchangeRates['EUR']; 
      } else if (targetCurrency === 'GBP'){
        currentRateForUSD = usdExchangeRates['GBP'] ; 
      } else if (targetCurrency === 'SGD'){
        currentRateForUSD = usdExchangeRates['SGD'] ; 
      } else if (targetCurrency === 'JPY'){
        currentRateForUSD = usdExchangeRates['JPY'] ; 
      } else if (targetCurrency === 'CNY'){
        currentRateForUSD = usdExchangeRates['CNY'] ; 
      } else {
        currentRateForUSD = 0; 
      }
      return currentRateForUSD;
    });
  
  let totalArea = document.getElementById("output-area"); 
  totalArea.removeAttribute("style");

  document.getElementById('convertedAmount').innerText =  exchangeProfile.handleConversion(amount, currentRateForUSD);

  return newExchangeRequest;
}

window.addEventListener("load", function() {

  event.preventDefault(); 

  let outputArea = document.getElementById("output-area"); 
  outputArea.style.display = "none";

  const form  = document.getElementById("conversionForm"); 
  form.addEventListener("submit", generateConversion);
});



