export default class usdExchangeService{ 
    static async getRatesForUSD(){
      try{

      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`);
      
      const jsonResponse = await response.json(); 

      if (!response.ok){
        let errorMessage = (response.status +" "+ jsonResponse.message); 
        throw new Error(errorMessage); 
      } 
      return jsonResponse;

    } catch(error){
      return error;
    }
  }
}

