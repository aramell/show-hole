// import react from 'react'
import { AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js';
import { useNavigate } from 'react-router-dom';
import { userPool } from './auth/userpool';

const Login = () => {
  const navigate = useNavigate()

    const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const { username, password } = form.elements as typeof form.elements & {
            username: HTMLInputElement;
            password: HTMLInputElement;
        }

        const authDetails = new AuthenticationDetails({
          Username: username.value,
          Password: password.value,
        });

        const user = new CognitoUser({ Username: username.value, Pool: userPool });

        console.log('username:', username.value);
        console.log('Password:', password.value);
        return new Promise((resolve, reject) => {
          user.authenticateUser(authDetails, {
            onSuccess: (result) => {
              const accessToken = result.getAccessToken().getJwtToken();
              resolve(accessToken); // You can store this token
              window.sessionStorage.setItem('accessToken', accessToken);
              navigate('/dashboard');
            },
            onFailure: (err) => reject(err),
          });
        });
    }


    return (
        <div className="homepage-container">
        <div className="login-card"> 
          <h1 className="text-3xl font-bold text-center mb-6">Login</h1> 
          <form onSubmit={handleLogin}>
            <div className="mb-4"> 
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2"> 
                Username
              </label>
              <input
                type="username"
                id="username"
                name="username"
                placeholder="Enter your username"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
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
            <div className="forgot-password">
              <a href="#" className="forgot-password-link">
                Forgot your password?
              </a>
            </div>
          </form>
        </div>
      </div>
    )
}

export default Login