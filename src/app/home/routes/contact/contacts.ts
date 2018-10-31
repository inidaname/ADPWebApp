import { AdminMember } from 'src/app/admin/Interface/admin';

export interface Contacts {
    adminInfo: AdminMember;
    officeNo: string;
    officeEmail: string;
    level: string;
    state: string;
    lga: string;
    ward: string;
    address: string;
}
