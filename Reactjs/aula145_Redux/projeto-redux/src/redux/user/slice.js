import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: {
        id: 1,
        name: 'João Marcelo',
        email: 'joao@teste.com',
        address: null,
    }
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {

    }
})

export default userSlice.reducer;