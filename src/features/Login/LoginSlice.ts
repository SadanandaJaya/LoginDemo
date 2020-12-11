import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import strings from "../../resources/strings";

interface ILoginState {
    userName: string;
    password: string;
    isUserLoggedIn: boolean;
    error?: Error;
    allEmployeesList: any;
    validUser: any;
}

const initialState: ILoginState = {
    userName: "",
    password: "",
    isUserLoggedIn: false,
    error: undefined,
    allEmployeesList: {
        user: [{
            "id": 1,
            "name": "test1",
            "age": "11",
            "gender": "male",
            "email": "test1@gmail.com",
            "phoneNo": "9415346313"
        },
        {
            "id": 2,
            "name": "test2",
            "age": "12",
            "gender": "male",
            "email": "test2@gmail.com",
            "phoneNo": "9415346314"
        },
        {
            "id": 3,
            "name": "test3",
            "age": "13",
            "gender": "male",
            "email": "test3@gmail.com",
            "phoneNo": "9415346315"
        },
        {
            "id": 4,
            "name": "test4",
            "age": "14",
            "gender": "male",
            "email": "test4@gmail.com",
            "phoneNo": "9415346316"
        },
        {
            "id": 5,
            "name": "test5",
            "age": "15",
            "gender": "male",
            "email": "test5@gmail.com",
            "phoneNo": "9415346317"
        },
        {
            "id": 6,
            "name": "test6",
            "age": "16",
            "gender": "male",
            "email": "test6@gmail.com",
            "phoneNo": "9415346318"
        }
        ]
    },
    validUser: {
        username: "hruday@gmail.com",
        password: "hruday123",
    }

}

export const LoginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        changeUserName: (state, action: PayloadAction<string>) => {
            state.userName = action.payload;
        },
        changePassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
        changeLoggedInUser: (state, action: PayloadAction<boolean>) => {
            state.isUserLoggedIn = action.payload;
        },
        resetError: (state) => {
            state.error = undefined;
        },
        validateUser(state) {
            if (state.userName.trim() === "") {
                state.error = Error(strings.username_error)
                return;
            } else if (state.password.trim() === "") {
                state.error = Error(strings.password_error)
                return;
            } else {
                if (state.validUser.username === state.userName && state.validUser.password === state.password) {
                    state.isUserLoggedIn = true;
                } else {
                    state.error = Error(strings.incorrect_username_or_password_error)
                    return;
                }
            }
        },
    }
})

export const { changeUserName, changePassword, changeLoggedInUser, validateUser, resetError } = LoginSlice.actions;

export const loginState = (state: RootState) => state.login;

export default LoginSlice.reducer;


