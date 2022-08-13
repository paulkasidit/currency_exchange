import $ from 'jquery';
import exchangeProfile from './js/exchangeLogic.js';
import usdExchangeService from ',/js/usdExchangeService.js';

//Business Logic  


  //function to convert USD to target currency by multiplying with exchange rate.  

//UI Logic 

  //display/hide currency output area. 

  $(document.ready(function(){
    $('#submitButton').click(function(event) {
      event.preventDefault(); 
      let newExchangeRequest; 
      const time = new Date(); 
      const amount =  $('#amount').val(); 
      const targetCurrency = $('#targetCurrency').val();   

      usdExchangeService.getRatesForUSD().then(function(response){
        let newExchangeRequest = new exchangeProfile(time,amount,targetCurrency, response);
        if ()
      }
    })
    });


