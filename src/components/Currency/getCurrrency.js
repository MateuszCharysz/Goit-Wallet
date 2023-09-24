import axios from 'axios';
export async function getCurrency(token) {
  const response = await axios(
    // WPISAC ADRES
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const currencyData = {};

  response.data.currency.forEach(currency => {
    switch (currency.ccy) {
      case 'EUR':
        currencyData.eur = {
          buy: currency.buy,
          sale: currency.sale,
        };
        break;
      case 'USD':
        currencyData.usd = {
          buy: currency.buy,
          sale: currency.sale,
        };
        break;

      default:
        break;
    }
  });

  return currencyData;
}