import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import google from '../../../images/social/google.png';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    let errorElement;

    if (error) {
        errorElement = <div>
            <p className='text-danger'>Error: {error?.message}</p>
          </div>
       
      }

      if (user) {
        navigate('/home')
    }
         

    return (
        <div>
        {errorElement}
        <div className=''>
             <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-info w-50 d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src={google} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>
        </div>
        </div>
    );
};

export default SocialLogin;