import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
  name: 'root',
  initialState: {
    name: 'Traveller',
    element: 'anemo',
    rarity: '5 star',
  },
  reducers: {
    chooseName: (state, action) => { state.name = action.payload; },
    chooseElement: (state, action) => { state.element = action.payload; },
    chooseRarity: (state, action) => { state.rarity = action.payload; },
  },
});

export const { reducer } = rootSlice;

export const { chooseName, chooseElement, chooseRarity } = rootSlice.actions;
