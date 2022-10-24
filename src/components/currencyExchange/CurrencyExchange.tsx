import React, { useState } from 'react';

import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import { getConvert } from '../../store/currencyReducer';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import translateRequestForApi from '../../utils/translateRequestForApi';

import s from './CurrencyExchange.module.scss';

const CurrencyExchange = () => {
  const [error, setError] = useState<string>('');
  const [inputCurrencyRequest, setInputCurrencyRequest] = useState<string>('');
  const dispatch = useAppDispatch();
  const conversionResult = useAppSelector(state => state.request.conversionResult);
  const appIsLoading = useAppSelector(state => state.request.appIsLoading);

  const makeRequest = () => {
    setError('');
    const result = translateRequestForApi(inputCurrencyRequest);

    if (typeof result === 'object') {
      const { amount, from, to } = result;

      dispatch(getConvert({ amount, from, to }));
    } else {
      setError(result);
    }
  };
  const onKeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (inputCurrencyRequest && e.key === 'Enter') {
      makeRequest();
    }
  };

  return (
    <div className={s.exchangeWrapper}>
      <div className={s.exchangeBlock}>
        <h2>Currency Converter</h2>
        <Input
          label="What do you want to convert?"
          placeholder="15 usd to rub"
          onChange={setInputCurrencyRequest}
          value={inputCurrencyRequest}
          onKeyPress={onKeyPressHandler}
        />
        <Button
          text="Exchange"
          onClick={makeRequest}
          disabled={!inputCurrencyRequest || appIsLoading}
        />
        <div className={s.output}>
          {appIsLoading ? (
            <p>converting...</p>
          ) : (
            <p>{error || conversionResult || 'Result will appear here'}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CurrencyExchange;
