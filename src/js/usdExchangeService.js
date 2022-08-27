export default class usdExchangeService{ 
    static async getRatesForUSD(){
      try{

      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`);
      //
      const jsonResponse = await response.json(); 

      if (!response.ok){
        let errorMessage = (response.status +" "+ jsonResponse.message); 
        throw new Error(errorMessage); 
      } 
      return jsonResponse.conversion_rates;

    } catch(error){
      return error;
    }
  }
}

//return jsonified response only, save whole variable as data 
// write function that uses data as the only variable, access conversion rates from there 
// 