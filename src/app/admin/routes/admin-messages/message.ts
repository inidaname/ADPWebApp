export interface Message {
    _id: string;
    fullName: string;
    subject: string;
    message: string;
    tags: string;
    status: boolean;
    dateCreated: Date;
}