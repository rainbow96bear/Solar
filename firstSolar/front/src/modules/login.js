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

export const loginThunk = createAsyncThunk(
  "login/loginThunk",
  async (login) => {
    return await promiseTime(login);
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState: { login: false },
  reducers: {
    setlogin: (state, action) => {
      return action.payload.login;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state, action) => {
        state.login = true;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.login = action.payload;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.login = undefined;
      });
  },
});

export const action = loginSlice.actions;
export const reducer = loginSlice.reducer;

export default loginSlice;
