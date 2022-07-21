import { Place } from "./place"

describe("places", () => {
    it("Je peux creer une place avec un nom", () => {
        const place = new Place("restau", "")
        expect(place.nom).toBe("restau")
    })

    it ("Je peux creer une place avec une adresse", () => {
        const place = new Place("restau", "2 rue blanche, 33300 Bordeaux")
        expect(place.adresse).toBe("2 rue blanche, 33300 Bordeaux")
    }) ,

    it ("Je peux ajouter un commentaire sur une place", () => {
        const place = new Place("restau", "2 rue blanche, 33300 Bordeaux")
        place.commentaire = "Ceci est un bon restau"
        expect(place.commentaire).toBe("Ceci est un bon restau")
    })
})
