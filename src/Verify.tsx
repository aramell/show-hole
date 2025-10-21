import { FormEvent } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { CognitoUser } from 'amazon-cognito-identity-js';
import { userPool } from './auth/userpool';

const Verify = () => {
  const [searchParams] = useSearchParams()

  const navigate = useNavigate()

  const handleSubmit =  async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = searchParams.get("username");

    const user = new CognitoUser({ Username: username || "", Pool: userPool });
    const code = event.currentTarget.elements.namedItem('verification-code') as string & HTMLInputElement;
    return new Promise((resolve, reject) => {
      user.confirmRegistration(code.value, true, (err, result) => {
        if (err) reject(err);
        else resolve(result);
        console.log(result, 'result of verification');
        navigate('/login');
      });
    });
  }
    return (
        // input your verificaiton code you recevied in your email
        <>
        <form onSubmit={handleSubmit}>

        <div className="mb-6">
              <label htmlFor="verification-code" className="form-label">
                Verification Code
              </label>
              <input
                type="verification-code"
                id="verification-code"
                name="verification-code"
                  placeholder="Enter your code"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
                >
                Login
              </button>
                </form>
                </>
    )
}

export default Verify