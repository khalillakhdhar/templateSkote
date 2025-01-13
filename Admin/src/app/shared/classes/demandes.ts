import { User } from './user';
export interface Demandes {
    id: string;
    type: string;
    debut:any
    fin:any
    etat: string;
    remarque:string
    user:User
}
