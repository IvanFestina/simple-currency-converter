import { currencyCodes } from './currency_codes';

const translateRequestForApi = (request: string) => {
  const array = request.split(' ');
  const requiredLength = 4;

  if (array.length === requiredLength)
    if (+array[0]) {
      if (currencyCodes.includes(array[1].toUpperCase()))
        if (currencyCodes.includes(array[3].toUpperCase()))
          return { amount: array[0], from: array[1], to: array[3] };
    }

  return 'Please, type your request properly';
};

export default translateRequestForApi;
