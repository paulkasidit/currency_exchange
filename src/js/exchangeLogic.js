export default class exchangeProfile {  

  constructor(time) {  
    this.date = time; 
    this.usdAmountRequestedToBeConverted = 0; 
    this.targetCurrency = ''; 
    this.currentExchangeRate = 0; 
  }

  handleConversion(response, targetCurrency, usdAmountRequestedToBeConverted ){
    return response.conversion_rates[targetCurrency] * usdAmountRequestedToBeConverted; 
  }

}