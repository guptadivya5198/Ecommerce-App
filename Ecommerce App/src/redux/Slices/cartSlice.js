const { createSlice } = require('@reduxjs/toolkit');

export const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    add: () => {},
    remove: () => {},
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
