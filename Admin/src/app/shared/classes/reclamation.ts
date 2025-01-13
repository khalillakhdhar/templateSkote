import { Utilisateur } from "./utilisateur";

export interface Reclamation {
    id:number;
    titre: string;
    sujet: string;
    texte: string;
    utilisateur:Utilisateur;
    createdAt: any;
    updatedAt: any;
}
