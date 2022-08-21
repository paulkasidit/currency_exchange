export default class usdExchangeService{ 
    static async getRatesForUSD(){
      try{
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`);
      const jsonResponse = await response.json();
      if (!response.ok){
        let errorMessage = "Oops! There was an error."
        throw new Error (errorMessage); 
      } 
      let usdExchangeRates = jsonResponse.conversion_rates;
      console.log(usdExchangeRates); 

      return usdExchangeRates;
    } catch(error){
      return error;
    }
  }
}