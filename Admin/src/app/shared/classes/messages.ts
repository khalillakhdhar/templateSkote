import { User } from "./user";

export interface Messages {
    id:string;
    texte:string
    date:number;
    emetteur:User
    destinataire:User
}
