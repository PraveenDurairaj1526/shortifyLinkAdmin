import { configureStore } from "@reduxjs/toolkit";
import shortLinkSliceReducer from '../slice/shortLinkSlice'

export const store = configureStore({
    devTools:true,
    reducer:{
        shortLinks:shortLinkSliceReducer
    }
})
