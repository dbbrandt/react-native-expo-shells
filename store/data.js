import {createSlice} from '@reduxjs/toolkit';

const dataSlice = createSlice({
    name: 'somedata',
    initialState: {
        someData: []
    },
    // With redux toolkit you can mutate state unlike plain redux because the toolkit takes care of it.
    reducers: {
        addSomeData: (state, action) => {
            state.someData.push(action.payload.somedata);
        },
        removeSomeData: (state, action) => {
            state.someData.splice(state.someData.indexOf(action.payload.id), 1);
        }
    }
});

export const addSomeData = dataSlice.actions.addSomeData;
export const removeSomeData = dataSlice.actions.removeSomeData;
export default dataSlice.reducer;