import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchContent } from "./contentActions";

interface Users {
    avatar: string;
    email: string; 
    first_name: string; 
    id: 1;
    last_name: string;
}
interface MyState {
    users: Users[];
    loading: boolean;
    fulfilled: boolean;
}
const initialState: MyState = {
    users: [],
    loading: false,
    fulfilled: false
}
const counterSlice = createSlice({
    name: 'content',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchContent.pending, (state) => {
            state.loading = true
            state.fulfilled = false
        }).addCase(fetchContent.fulfilled, (state, action) => {
            state.loading= false
            state.fulfilled = true
            state.users = action.payload.data
        }).addCase(fetchContent.rejected, (state) => {
            state.loading = false;
            
        })
    }
})

export default counterSlice.reducer