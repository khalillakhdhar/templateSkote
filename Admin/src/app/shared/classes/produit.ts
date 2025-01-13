import { Demande } from "./demande";

export interface Produit {
    id: number;
    titre: string;
    prix: number;
    cassabilite: boolean;
    demande:Demande;
    createdAt: any;
    updatedAt: any;
}
