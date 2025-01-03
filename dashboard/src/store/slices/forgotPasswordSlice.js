import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const forgotResetPassSlice = createSlice({
  name: "forgotPassword",
  initialState: {
    loading: false,
    error: null,
    message: null,
  },
  reducers: {
    forgotPasswordRequest(state, action) {
      (state.loading = true), (state.error = null);
      state.message = null;
    },
    forgotPasswordSuccess(state, action) {
      (state.loading = false), (state.error = null);
      state.message = action.payload;
    },
    forgotPasswordFailed(state, action) {
      (state.loading = true), (state.error = action.payload);
      state.message = null;
    },
    resetPasswordRequest(state, action) {
      (state.loading = true), (state.error = null);
      state.message = null;
    },
    resetPasswordSuccess(state, action) {
      (state.loading = false), (state.error = null);
      state.message = action.payload;
    },
    resetPasswordFailed(state, action) {
      (state.loading = true), (state.error = action.payload);
      state.message = null;
    },
    clearAllError(state, action) {
      (state.error = null), (state = state);
    },
  },
});

/* forgot password */

export const forgotPassword = (email) => async (dispatch) => {
  dispatch(forgotResetPassSlice.actions.forgotPasswordRequest());
  try {
    const { data } = await axios.post(
      "https://portfolio-backend-nlxk.onrender.com/api/v1/user/password/forgot",
      { email },
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    dispatch(forgotResetPassSlice.actions.forgotPasswordSuccess(data.message));
    dispatch(forgotResetPassSlice.actions.clearAllError());
  } catch (error) {
    dispatch(
      forgotResetPassSlice.actions.forgotPasswordFailed(
        error.response.data.message
      )
    );
  }
};

/* reset password */

export const resetPassword =
  (token, password, confirmPassword) => async (dispatch) => {
    dispatch(forgotResetPassSlice.actions.resetPasswordRequest());
    try {
      const { data } = await axios.post(
        `https://portfolio-backend-nlxk.onrender.com/api/v1/user/password/reset/${token}`,
        { password, confirmPassword },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      dispatch(forgotResetPassSlice.actions.resetPasswordSuccess(data.message));
      dispatch(forgotResetPassSlice.actions.clearAllError());
    } catch (error) {
      dispatch(
        forgotResetPassSlice.actions.resetPasswordFailed(
          error.response.data.message
        )
      );
    }
  };

/* clear all forgot reset password errors */

export const clearAllForgotResetPasswordErrors = () => (dispatch) => {
  dispatch(forgotResetPassSlice.actions.clearAllError());
};

export default forgotResetPassSlice.reducer;
