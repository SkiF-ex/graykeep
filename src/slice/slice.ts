import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

const url = new URL(window.location.href);

export const fetchData = createAsyncThunk('perks/fetchData', async (params: string) => {
    const searchParams = params.length > 0 ? params : url.search;

    return await fetch(`http://127.0.0.1:5000/perks${searchParams}`).then(data => data.json());
});

export const fetchTrees = createAsyncThunk('perk/trees', async () => {
    return await fetch(`http://127.0.0.1:5000/trees`).then(data => data.json());
});

const initialState: any = {
    data: [],
    loader: false,
    trees: [],
};

const slice = createSlice({
    name: 'red',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.loader = true;
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.loader = false;
                state.data = action.payload;
            })
            .addCase(fetchTrees.fulfilled, (state, action) => {
                state.trees = action.payload;
            })
    },
});

export default slice.reducer;
export const { } = slice.actions;