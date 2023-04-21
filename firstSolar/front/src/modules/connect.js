import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const promiseTime = (count) => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve(count);
      }, 100);
    } catch (error) {
      reject(error);
    }
  });
};

export const connectThunk = createAsyncThunk(
  "connect/connectThunk",
  async (connect) => {
    return await promiseTime(connect);
  }
);

const connectSlice = createSlice({
  name: "connect",
  initialState: { connect: false },
  reducers: {
    setConnect: (state, action) => {
      return action.payload.connect;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(connectThunk.pending, (state, action) => {
        state.connect = true;
      })
      .addCase(connectThunk.fulfilled, (state, action) => {
        state.connect = action.payload;
      })
      .addCase(connectThunk.rejected, (state, action) => {
        state.connect = undefined;
      });
  },
});

export const action = connectSlice.actions;
export const reducer = connectSlice.reducer;

export default connectSlice;
