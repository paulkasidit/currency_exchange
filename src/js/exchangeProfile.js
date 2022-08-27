export default class exchangeProfile {  

  constructor(usdAmountRequestedToBeConverted, targetCurrency) {  
    this.usdAmountRequestedToBeConverted = parseInt(usdAmountRequestedToBeConverted); 
    this.targetCurrency = targetCurrency; 
  }

  handleConversion(usdAmountRequestedToBeConverted, currentExchangeRate){
    return currentExchangeRate * usdAmountRequestedToBeConverted; 
  }

}