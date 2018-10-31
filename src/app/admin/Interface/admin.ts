import { IUserData } from 'src/app/home/interface/userData';

export interface AdminMember {
    phoneNumber: string;
    personalInfo: IUserData;
    level: string;
    position: string;
    nameOfLocation: string;
    dateCreated: Date;
    approve: boolean;
}