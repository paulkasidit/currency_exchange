import exchangeProfile from './js/exchangeLogic.js';
import usdExchangeService from './js/usdExchangeService.js';

//Business Logic  
function generateConversion(event) {
  
  event.preventDefault(); 

  let newExchangeRequest; 
  const time = new Date(); 
  const amount =  document.getElementById('amount').value;
  const targetCurrency = document.getElementById('targetCurrency');

  usdExchangeService.getRatesForUSD()
    .then(function(response){
      newExchangeRequest = new exchangeProfile(time, amount, targetCurrency, response);

      if (targetCurrency === 'EUR'){
        newExchangeRequest.currentExchangeRate = response.conversion_rates['EUR']; 
      } else if (targetCurrency === 'GBP'){
        newExchangeRequest.currentExchangeRate = response.conversion_rates['GBP'] ; 
      } else if (targetCurrency === 'SGD'){
        newExchangeRequest.currentExchangeRate = response.conversion_rates['SGD'] ; 
      } else if (targetCurrency === 'JPY'){
        newExchangeRequest.currentExchangeRate = response.conversion_rates['JPY'] ; 
      } else if (targetCurrency === 'CNY'){
        newExchangeRequest.currentExchangeRate = response.conversion_rates['CNY'] ; 
      } else {
        newExchangeRequest.currentExchangeRate = 0; 
      }});
  
  let totalArea = document.getElementById("output-area"); 
  totalArea.removeAttribute("style");

  document.getElementById('convertedAmount').innerText =  newExchangeRequest;

  return newExchangeRequest;
}

window.addEventListener("load", function() {

  event.preventDefault(); 

  let outputArea = document.getElementById("output-area"); 
  outputArea.style.display = "none";

  const form  = document.getElementById("conversionForm"); 
  form.addEventListener("submit", generateConversion);
});



