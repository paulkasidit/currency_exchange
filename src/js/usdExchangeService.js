export default class usdExchangeService{ 
    static async getRatesForUSD(){
      try{
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`);
      console.log("TTTTTTTTTT", response);

      let jsonResponse = response.json();
      console.log("OOOOOOO", jsonResponse);
      if (!response.ok){
        let errorMessage = "Oops! There was an error.";
        throw new Error (errorMessage); 
      } 
      let usdExchangeRates = jsonResponse.conversion_rates;
      // console.log("BBBBBBBB",usdExchangeRates); 

      return jsonResponse;
    } catch(error){
      return error;
    }
  }
}