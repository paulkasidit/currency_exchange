export default class exchangeProfile {  

  constructor(usdAmountRequestedToBeConverted, targetCurrency) {  
    this.usdAmountRequestedToBeConverted = parseInt(usdAmountRequestedToBeConverted); 
    this.targetCurrency = targetCurrency; 
    console.log(targetCurrency); 
    console.log(usdAmountRequestedToBeConverted);
  }

  handleConversion(usdAmountRequestedToBeConverted, currentExchangeRate){
    return currentExchangeRate * usdAmountRequestedToBeConverted; 
  }

}