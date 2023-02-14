import React, { useContext, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { api } from '../../network/api'
import { authContext } from '../../store/AuthContext';

function ConfirmCode() {

    let location = useLocation()

    // const navigate = useNavigate();
    // const { loginStatus, setloginStatus } = useContext(authContext);
    const [confirmCode, setconfirmCode] = useState('');

    const confirm = () => {

        api.add('/webusers/confirmCode', {confirmCode:confirmCode, webUserId: location.state.webUserId})
            .then(res => {
        
                localStorage.setItem('token', res.token);
                // setloginStatus(true);
            })
            .catch(err => {
                alert('Confirm Code Error!!');
            })

    }


    return (<>
        <input type='text' onChange={(e) => setconfirmCode(e.target.value)} />
        <button onClick={confirm}>Confirm</button>
    </>)
}

export default ConfirmCode