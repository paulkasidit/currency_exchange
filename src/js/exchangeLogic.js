export default class exchangeProfile {  

  constructor(time, usdAmountRequestedToBeConverted, targetCurrency, currentExchangeRate) {  
    this.date = time; 
    this.usdAmountRequestedToBeConverted = parseInt(usdAmountRequestedToBeConverted); 
    this.targetCurrency = targetCurrency; 
    this.currentExchangeRate = 0; 
  }

  handleConversion(usdAmountRequestedToBeConverted, currentExchangeRate ){
    return currentExchangeRate * usdAmountRequestedToBeConverted; 
  }

}