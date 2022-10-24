import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { exchangeAPI } from '../api/api';

export const getLatestRates = createAsyncThunk(
  'currency/getLatestRates',
  async (params: getLatestRatesParamsType, thunkAPI) => {
    try {
      // BASE - three-letter currency code of your preferred base currency.
      // SYMBOLS - list of comma-separated currency codes to limit output currencies.
      const res = await exchangeAPI.getLatest(params.base, params.symbols);

      return res.data.rates;
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log('Error', e);

      return thunkAPI.rejectWithValue(e);
    }
  },
);

export const getConvert = createAsyncThunk(
  'currency/getConvert',
  async (params: getConvertParamsType, thunkAPI) => {
    const resultToFixed = 2;

    try {
      const res = await exchangeAPI.getConvert(params.amount, params.from, params.to);
      const { from, fromAmount } = {
        from: res.data.query.from,
        fromAmount: res.data.query.amount,
      };
      const { to, toAmount } = {
        to: res.data.query.to,
        toAmount: res.data.result.toFixed(resultToFixed),
      };

      return `${fromAmount} ${from} = ${toAmount} ${to}`;
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log('Error', e);

      return thunkAPI.rejectWithValue(e);
    }
  },
);

const initialState = {
  latestRates: {} as { [key: string]: number },
  conversionResult: '' as string,
  appIsLoading: false as boolean,
};

export const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getLatestRates.pending, (state, action) => {
        state.appIsLoading = true;
      })
      .addCase(getLatestRates.fulfilled, (state, action) => {
        state.appIsLoading = false;
        state.latestRates = action.payload;
      })
      .addCase(getLatestRates.rejected, (state, action) => {
        state.appIsLoading = false;
      })
      .addCase(getConvert.pending, (state, action) => {
        state.appIsLoading = true;
      })
      .addCase(getConvert.fulfilled, (state, action) => {
        state.appIsLoading = false;
        state.conversionResult = action.payload;
      })
      .addCase(getConvert.rejected, (state, action) => {
        state.appIsLoading = false;
      });
  },
});

// export const {} = RequestSlice.actions;

export default currencySlice.reducer;
//
// // T Y P E S
type getConvertParamsType = {
  amount: string;
  to: string;
  from: string;
};
type getLatestRatesParamsType = {
  base: string;
  symbols?: string;
};
