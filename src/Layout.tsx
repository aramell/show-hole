import react from 'react'


const Layout = ({children}: { children: react.JSX.Element }): react.JSX.Element => {
    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-green-700 via-emerald-500 to-gray-800 text-white text-center p-6">
            {children}
        </div>
    )
}

export default Layout