import React from 'react';

import { Route, Routes, Navigate } from 'react-router-dom';

import CurrencyChart from './currencyChart/CurrencyChart';
import CurrencyExchange from './currencyExchange/CurrencyExchange';
import { Error404Page } from './error/Error404Page';

export const PATH = {
  CURRENCY_EXCHANGE: '/currency_exchange',
  CURRENCY_CHART: '/currency_chart',
};

export const RoutesApp = () => (
  <Routes>
    <Route path="/" element={<Navigate to={PATH.CURRENCY_EXCHANGE} />} />
    <Route path={PATH.CURRENCY_EXCHANGE} element={<CurrencyExchange />} />
    <Route path={PATH.CURRENCY_CHART} element={<CurrencyChart />} />
    <Route path="*" element={<Error404Page />} />
  </Routes>
);
