import React, { useEffect, useState } from 'react';

import Select from '../../common/Select/Select';
import { getLatestRates } from '../../store/currencyReducer';
import { currencyByBrowser } from '../../utils/currencyByBrowser';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';

import s from './CurrencyChart.module.scss';

const CurrencyChart = () => {
  const [baseCurrency, setBaseCurrency] = useState(currencyByBrowser());
  const dispatch = useAppDispatch();
  const latestRates = useAppSelector(state => state.request.latestRates);
  const appIsLoading = useAppSelector(state => state.request.appIsLoading);

  // here, we prepare data to display
  const currencyOptions = Object.entries(latestRates).map(rate => rate[0]);
  const currencyToDisplay = Object.entries(latestRates)
    .filter(currency => currency[0] !== baseCurrency)
    .map(currency => (
      <div className={s.table} key={currency[0]}>
        <p>{currency[0]}</p>
        {/* @ts-ignore */}
        <p>{currency[1].toFixed(2)}</p>
      </div>
    ));

  useEffect(() => {
    // in case you need a lot of currency, type empty string in symbols
    dispatch(getLatestRates({ base: baseCurrency, symbols: 'USD,EUR,RUB' }));
  }, [dispatch, baseCurrency]);

  const onChangeBaseCurrency = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBaseCurrency(e.target.value);
  };

  return (
    <div className={s.chartWrapper}>
      <div className={s.chartBlock}>
        <h2>Currency Chart</h2>
        <Select
          value={baseCurrency}
          onChange={onChangeBaseCurrency}
          options={currencyOptions}
        />
        {appIsLoading ? <div>Loading...</div> : currencyToDisplay}
      </div>
    </div>
  );
};

export default CurrencyChart;
