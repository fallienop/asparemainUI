import { configureStore } from "@reduxjs/toolkit";
import aspareSlicer from './aspareSlicer'

export const store=configureStore({
    reducer:{
        aspareSlice:aspareSlicer
    },
    // middleware:(getDefaultMiddleware) => getDefaultMiddleware()
})
export default store;