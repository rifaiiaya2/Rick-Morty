import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface dataInterface {
  id: number;
  name: string;
  image: string;
  status: string;
}
interface AlldataInterface {
  data: dataInterface[];
  loading: boolean;
  error: string | undefined;
}
export const fetchData = createAsyncThunk<dataInterface[]>(
  "tv/fetchData",
  async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const jsonData = await response.json();
    return jsonData.results;
  }
);
const initialState: AlldataInterface = {
  data: [],
  loading: false,
  error: undefined,
};

const dataSlice = createSlice({
  name: "alldata",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export default dataSlice.reducer;
