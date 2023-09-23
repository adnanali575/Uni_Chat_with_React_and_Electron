import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    testAction() {
      alert();
    },
  },
});

export default usersSlice.reducer;
export const { testAction } = usersSlice.actions;
