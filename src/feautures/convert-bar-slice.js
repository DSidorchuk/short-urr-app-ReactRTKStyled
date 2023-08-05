import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUrl } from "../api/fetchUrl";

const initialState = {
   list: [],
   status: 'idle',
   error: null,
}

export const loadShorten = createAsyncThunk(
   '@@url/load-shorten',
   async (url) => {
      return fetchUrl(url);
   }
)

const urlSlice = createSlice({
   name: '@@url',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(loadShorten.pending, (state) => {
            state.status = 'loading';
            state.error = null;
         })
         .addCase(loadShorten.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = action.payload || action.meta.error;
         })
         .addCase(loadShorten.fulfilled, (state, action) => {
            state.list.push(action.payload.result);
            state.status = 'received';
         })
   }
})

export const urlReducer = urlSlice.reducer;