import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createIncome, deleteIncome, getIncome, updateIncome } from "../api/income.api";
import { getErrorMessage } from "../api/error.api";

const request = async (callback, rejectWithValue) => {
  try { return (await callback()).data.data; }
  catch (error) { return rejectWithValue(getErrorMessage(error)); }
};

export const addIncome = createAsyncThunk("income/addIncome", (data, { rejectWithValue }) => request(() => createIncome(data), rejectWithValue));
export const fetchIncome = createAsyncThunk("income/fetchIncome", (_, { rejectWithValue }) => request(getIncome, rejectWithValue));
export const editIncome = createAsyncThunk("income/editIncome", ({ id, data }, { rejectWithValue }) => request(() => updateIncome(id, data), rejectWithValue));
export const removeIncome = createAsyncThunk("income/removeIncome", (id, { rejectWithValue }) => request(() => deleteIncome(id), rejectWithValue));

const initialState = { items: [], status: "idle", error: null };
const setPending = (state) => { state.status = "loading"; state.error = null; };
const setRejected = (state, action) => { state.status = "failed"; state.error = action.payload; };

const incomeSlice = createSlice({
  name: "income",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchIncome.pending, setPending)
      .addCase(fetchIncome.fulfilled, (state, action) => { state.status = "success"; state.items = action.payload; })
      .addCase(fetchIncome.rejected, setRejected)
      .addCase(addIncome.pending, setPending)
      .addCase(addIncome.fulfilled, (state, action) => { state.status = "success"; state.items.unshift(action.payload); })
      .addCase(addIncome.rejected, setRejected)
      .addCase(editIncome.pending, setPending)
      .addCase(editIncome.fulfilled, (state, action) => {
        state.status = "success";
        const index = state.items.findIndex((income) => income._id === action.payload._id);
        if (index !== -1) state.items[index] = action.payload;
      })
      .addCase(editIncome.rejected, setRejected)
      .addCase(removeIncome.pending, setPending)
      .addCase(removeIncome.fulfilled, (state, action) => {
        state.status = "success";
        state.items = state.items.filter((income) => income._id !== action.meta.arg);
      })
      .addCase(removeIncome.rejected, setRejected);
  },
});

export default incomeSlice.reducer;
