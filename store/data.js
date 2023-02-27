import {createSlice} from '@reduxjs/toolkit';

const dataSlice = createSlice({
    name: 'appdata',
    initialState: {
        someData: []
    },
    // With redux toolkit you can mutate state unlike plain redux because the toolkit takes care of it.
    reducers: {
        addSomeData: (state, action) => {
            state.someData.push({id: action.payload.id, dateAdded: action.payload.dateAdded});
        },
        updateExpense: (state, action) => {
            const id = action.payload.id;
            const index = state.expenseData.findIndex(x => x.id === id);
            state.expenseData[index] = action.payload;
        },
        removeSomeData: (state, action) => {
            state.someData = state.someData.filter((item) => item.id != action.payload.id);
        }
    }
});

export const addSomeData = dataSlice.actions.addSomeData;
export const updateSomeData = dataSlice.actions.uupdateSomeData;
export const removeSomeData = dataSlice.actions.removeSomeData;
export default dataSlice.reducer;