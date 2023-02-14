import React from 'react'
import { useNavigate } from 'react-router-dom';
import { api } from '../../network/api';
// import { authContext } from '../../store/AuthContext';

function Login() {

    const navigate = useNavigate();
    const userLogin = () => {

        let user = {
            email: 'chagatay.yildiz@code.edu.az',
            password: '123'
        }

        api.add('/webusers/login', user)
            .then(res => {
                navigate('confirmCode', { state: { webUserId: res._id } })
            })
            .catch(err => {
                console.log('Err', err);
                alert('Email or password invalid!')
            })

    }

    return (<>
        <button onClick={() => userLogin()}>Login</button>
    </>)
}

export default Login