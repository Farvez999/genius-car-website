import React, { useContext } from 'react';
import { setAuthToken } from '../../../Api/auth';
import { AuthContext } from '../../../contexts/AuthProvider';

const SocialLogin = () => {

    const { googleSignIn } = useContext(AuthContext)

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user
                console.log(user)

                setAuthToken(user)
            })
            .then(error => console.error(error))
    }

    return (
        <div>
            <p className='text-center'> <small>Social Login</small> </p>
            <p onClick={handleGoogleSignIn} className='text-center'> <button className='btn btn-ghost'>Google</button> </p>
        </div>
    );
};

export default SocialLogin;