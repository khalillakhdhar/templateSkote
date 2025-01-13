import { Produit } from "./produit";
import { Utilisateur } from "./utilisateur";

export interface Demande {
    id: number;
    lieu: string;
    etat: string;
    frais: number;
    utilisateur:Utilisateur;
    produits:Produit[];
    createdAt: any;
    updatedAt: any;
    telephone: string;
}
