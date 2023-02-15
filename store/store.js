// yarn add @reduxjs/toolkit
// yarn add react-redux

import { configureStore } from "@reduxjs/toolkit";
import dataReReducer from './data';

export const store = configureStore({
    reducer: {
        appdata: dataReReducer
    }
});

