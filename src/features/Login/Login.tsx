import React from 'react';
import './Login.css';
import { useSelector, useDispatch } from 'react-redux';
import { loginState, validateUser } from './LoginSlice';
import { changeUserName, changePassword, resetError } from './LoginSlice';
import strings from '../../resources/strings';
import { RouteComponentProps } from 'react-router-dom';


export interface ILoginProps {
    routerProps: RouteComponentProps;
}

function Login(props: ILoginProps) {
    const loginStateValues = useSelector(loginState);
    const dispatch = useDispatch();
    return (
        <div className="login">
            <div className="loginCard">
                <div> {loginStateValues.error && <span>{loginStateValues?.error?.message}</span>}</div>

                <span>{strings.username}</span>
                <input
                    type="text"
                    value={loginStateValues.userName}
                    onChange={(event: any) => {
                        dispatch(changeUserName(event.target.value))

                    }}
                    onFocus={() => {
                        dispatch(resetError())
                    }}
                />

                <span>{strings.password}</span>
                <input
                    type="password"
                    value={loginStateValues.password}
                    onChange={(event: any) => {
                        dispatch(changePassword(event.target.value))
                        dispatch(resetError())
                    }}
                    onFocus={() => {
                        dispatch(resetError())
                    }}
                />

                <button
                    onClick={() => {
                        dispatch(validateUser())
                        props.routerProps.history.push('/employees-list')
                    }}
                >
                    {strings.login}
                </button>
            </div>
        </div >
    )
}

export default Login;