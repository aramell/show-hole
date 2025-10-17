import react from 'react'

const Login = () => {

    return (
        <div className="homepage-container">
        <div className="login-card"> 
          <h1 className="text-3xl font-bold text-center mb-6">Login</h1> 
          <form>
            <div className="mb-4"> 
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2"> 
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
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