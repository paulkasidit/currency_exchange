export default class usdExchangeService {
  static getRatesForUSD() {
    return fetch(`https://v6.exchangerate-api.com/v6/3d0b2a6c62d381c15ac69a81/latest/USD`)
      .then(function(response) {
        if(!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function(error) {
        return error;
      });
  }
}