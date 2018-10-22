import { IUserData } from './userData';

export interface ILogIndata {
    message: string;
    token: string;
    user: IUserData;
}
