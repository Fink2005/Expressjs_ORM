import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { GoogleLoginButton } from 'ts-react-google-login-component';

const GoogleSignIn: React.FC = () => {
    const clientConfig = {
        client_id: '56087377502-c1hovt0pjl79u5pjs5gjqf0pkvqn8sva.apps.googleusercontent.com',
    };

    const signInOptions = { scope: 'profile' }

    const preLoginTracking = () => {
        console.log('Attemp to login with google');
    }

    const responseGoogle = (googleUser: gapi.auth2.GoogleUser) => {
        const profile = googleUser.getBasicProfile(); // 🔥 Lấy thông tin hồ sơ
        const authResponse = googleUser.getAuthResponse(true); // 🔥 Lấy token đăng nhập

        console.log("Google User Info:", {
            googleId: profile.getId(),
            name: profile.getName(),
            email: profile.getEmail(),
            imageUrl: profile.getImageUrl(),
            accessToken: authResponse.id_token, // JWT Token
            expiresAt: authResponse.expires_at, // Thời gian hết hạn token
        });
    };


    const errorHandler = (error: string) => console.error(error);

    return (
        <div className="flex flex-col items-center space-y-4">

            <GoogleLoginButton
                classNames='flex items-center justify-center w-full p-3 border rounded-lg shadow-md hover:bg-gray-100 transition'
                responseHandler={responseGoogle}
                clientConfig={clientConfig}
                preLogin={preLoginTracking}
                failureHandler={errorHandler}
                singInOptions={signInOptions}
            >
                <FcGoogle className=' w-6 h-6 mr-2'/>
                <div className='text-black font-medium'>Continue with Google</div>
            </GoogleLoginButton>

        </div>
    );
};

export default GoogleSignIn;
