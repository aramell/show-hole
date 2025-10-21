import {FormEvent} from 'react';
import { CognitoUserAttribute } from 'amazon-cognito-identity-js';

import { userPool } from './auth/userpool';

import { createSearchParams, useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate()
    const signUp = (username: string, email: string, password: string) => {
        console.log(email, password,)
        return new Promise((resolve, reject) => {
            const attributeList = [
              new CognitoUserAttribute({ Name: 'email', Value: email }),
            ];
        
            userPool.signUp(username, password, attributeList, [], (err: any, result: any) => {
              if (err) {
                reject(err);
              } else {
                resolve(result.user);
              }
            });
          });
        }

        const handleRegister = async (event: FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const form = event.target as HTMLFormElement;
            const { username, email, password } = form.elements as typeof form.elements & {
                email: HTMLInputElement;
                password: HTMLInputElement;
                username: HTMLInputElement
            }
            try {
                const user = await signUp(username.value, email.value, password.value);
                console.log('User registered:', user);
                // naviagte and set username as a param in url
                // how do i set username as a param in url
                const params = { username: username.value };
                navigate({ pathname: `/verify`,
                    search: `?${createSearchParams(params)}`});

            } catch (error) {
                console.error('Error registering user:', error);
            }
        }


    return (
        <form onSubmit={handleRegister}>
        <div className='mb-5'>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required />
        </div>
        <div className='mb-5'>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
        </div>
        <div className='mb-5'>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
        </div>
        <button className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        type="submit">Sign Up</button>
        </form>
    )
    }
export default Register