import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const applyForm = createAsyncThunk(
  'requestForm/currency',
  async ({ params }: any, thunkAPI) => {
    const secondsToWait = 2000;

    try {
      const res = await new Promise(resolve => {
        setTimeout(() => resolve(params), secondsToWait);
      });

      // eslint-disable-next-line no-console
      console.log(JSON.stringify(res));
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log('Error', e);

      return thunkAPI.rejectWithValue(e);
    }
  },
);

const initialState = {
  appIsLoading: false as boolean,
};

export const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(applyForm.pending, (state, action) => {
        state.appIsLoading = true;
      })
      .addCase(applyForm.fulfilled, (state, action) => {
        state.appIsLoading = false;
      })
      .addCase(applyForm.rejected, (state, action) => {
        state.appIsLoading = false;
      });
  },
});

// export const {} = RequestSlice.actions;

export default currencySlice.reducer;
//
// // T Y P E S
type CitiesType = {};
