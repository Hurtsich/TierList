export class Place {
    nom: String
    adresse: String
    commentaire: String = ""

    constructor(nom: String, adresse:String) {
        this.nom = nom;
        this.adresse = adresse
    }
}
