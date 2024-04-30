import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: null,
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        createUser: (state, action) => {

            return {
                ...state,
                user: {
                    name: action.payload.name,
                    email: action.payload.email,
                    address: null,
                }
            }
        },

        logoutUser: (state) => {

            return {
                ...state,
                user: null,
            }
        },

        addAddress: (state, action) => {

            if (action.payload.location === '' || action.payload.number === '') {
                alert('Prenencha todos os campos')
                return { ...state }
            }

            return {
                ...state,
                user: {
                    ...state.user,
                    address: {
                        location: action.payload.location,
                        number: action.payload.number,
                    }
                }
            }


        }

    }
})

export const { createUser, logoutUser, addAddress} = userSlice.actions;
export default userSlice.reducer;