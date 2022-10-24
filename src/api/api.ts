import axios from 'axios';

enum BASE_URLS {
  API_RATE = 'https://api.apilayer.com/exchangerates_data',
}

export const instance = axios.create({
  baseURL: BASE_URLS.API_RATE,
  headers: { apikey: process.env.REACT_APP_API_KEY },
});

// REQUESTS

export const exchangeAPI = {
  getLatest(base: string, symbols?: string) {
    return instance.get<GetLatestReturnType>(`/latest?symbols=${symbols}&base=${base}`);
  },
  getConvert(amount: string, from: string, to: string) {
    return instance.get<GetConvertReturnType>(
      `/convert?to=${to}&from=${from}&amount=${amount}`,
    );
  },
};
//
type GetLatestReturnType = {
  base: string;
  date: string;
  rates: RateType;
  success: boolean;
  timestamp: number;
};
type RateType = {
  [key: string]: number;
};

type GetConvertReturnType = {
  info: {
    quote: number;
    timestamp: number;
  };
  query: {
    amount: number;
    from: string;
    to: string;
  };
  result: number;
  success: boolean;
};
