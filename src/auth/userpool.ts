import { CognitoUserPool } from 'amazon-cognito-identity-js';
import { poolData } from '../cognitoConfig';

export const userPool = new CognitoUserPool(poolData)
