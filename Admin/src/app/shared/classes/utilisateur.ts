export interface Adresse{
    province: string;
    rue: string;
    codePostal: string;
    ville: string;
    
}
export interface Utilisateur {
    id:number;
    nom: string;
    prenom: string;
    email: string;
    grade: string;
    adresse: Adresse;
    telephone: string;
    createdAt: any;
    updatedAt: any;
}
