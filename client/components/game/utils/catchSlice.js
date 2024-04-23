import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  score: 0,
  sendScoreModalOpen: false,
};

export const catchSlice = createSlice({
  name: "myReducers",
  initialState,
  reducers: {
    updateScore: (state, action) => {
      state.score += action.payload;
    },
    openSendScoreModal: (state) => {
      state.sendScoreModalOpen = true;
    },
    closeSendScoreModal: (state) => {
      state.sendScoreModalOpen = false;
    },
  },

  extraReducers(builder) {
    builder.addCase(sendScore.fulfilled, (state, action) => {
      state.score = 0;
    });
  }
});
export const { updateScore, openSendScoreModal, closeSendScoreModal } =
  catchSlice.actions;

export default catchSlice.reducer;

export const sendScore = createAsyncThunk(
  "sendScore",
  async ({event, score,}, thunkAPI) => {
    event.preventDefault();

    try {
      let response = await fetch('http://sandbox-server-eta.vercel.app/sendscore', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({score, name: event.target[0].value}),
      });

      if (!response.ok) {
        throw new Error('Server responded with a non-200 status');
      }

      const newRecord = await response.json();
      return newRecord;

    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getScore = createAsyncThunk(
  "getScore",
  async (thunkAPI) =>{
    try {
      let response = await fetch('http://sandbox-server-eta.vercel.app/getscore', {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error('Server responded with a non-200 status');
      }

      const score = await response.json();
      return score;
    }
    catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)