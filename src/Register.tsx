import {FormEvent} from 'react';
import { CognitoUserAttribute } from 'amazon-cognito-identity-js';

import { userPool } from './auth/userpool';


const Register = () => {

    const signUp = (email: string, password: string) => {
        return new Promise((resolve, reject) => {
            const attributeList = [
              new CognitoUserAttribute({ Name: 'email', Value: email }),
            ];
        
            userPool.signUp(email, password, attributeList, null, (err: any, result: any) => {
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
            const {  email, password } = form.elements as typeof form.elements & {
                email: HTMLInputElement;
                password: HTMLInputElement;
            }
            try {
                const user = await signUp(email.value, password.value);
                console.log('User registered:', user);
            } catch (error) {
                console.error('Error registering user:', error);
            }
        }


    return (
        <form onSubmit={handleRegister}>
        {/* <div>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required />
        </div> */}
        <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
        </div>
        <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Sign Up</button>
        </form>
    )
    }
export default Register