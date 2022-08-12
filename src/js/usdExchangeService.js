export default class usdExchangeService{

  static async getRatesForUSD(){
    try{
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`);
      if(!response.ok){
        throw Error(response.statusText);
      }
      return await response.json();
    } catch(error) {
      return error.message; //not showing in the dom because user has no interaction with this call
    }
  }