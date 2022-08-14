import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
import exchangeProfile from './js/exchangeLogic.js';
import usdExchangeService from './js/usdExchangeService.js';

//Business Logic  

$(document.ready(function(){
    $('#submitButton').click(function(event) {
      event.preventDefault(); 
      let newExchangeRequest; 
      const time = new Date(); 
      const amount =  $('#amount').val(); 
      const targetCurrency = $('#targetCurrency').val();   

      usdExchangeService.getRatesForUSD()
      .then(function(response){
        let newExchangeRequest = new exchangeProfile(time, amount, targetCurrency, response);

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
        }

        $('#convertedAmount').append(`${newExchangeRequest.exchangeResults(usdAmountRequestedToBeConverted, currentExchangeRate)}`);
    });
    });
  }));

