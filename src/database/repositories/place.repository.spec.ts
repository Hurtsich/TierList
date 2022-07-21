import { DataSource, EqualOperator, FindOperator } from "typeorm"
import { Place } from '../entities/place';
import { AppDataSource } from '../data-source';
import { ConsoleLogger } from "@nestjs/common";

describe("place repo", () => {
    beforeAll(async () => {
        await AppDataSource.initialize()
        await AppDataSource.getRepository(Place).delete({ nom: new EqualOperator("Test")})
    })
    afterEach(async () => {
        await AppDataSource.getRepository(Place).delete({ nom: new EqualOperator("Test")})
    })
    afterAll(async () =>{
        await AppDataSource.destroy()
    })

    it("Je peux enregistrer une place et la lire", async () => {
            const placeMaster = new Place()
            placeMaster.nom = "Test"
            placeMaster.adresse = "Adresse"
            placeMaster.commentaire = "Commentaire"
            const placeRepo = AppDataSource.getRepository(Place);
            
            await placeRepo.save(placeMaster)
            
            const place = await placeRepo.findOneBy({id : new EqualOperator(1)})
            expect(place).toEqual(placeMaster)
    })

    it("Je peux enregistrer plusieurs places", async () => {
            const placeMaster = new Place()
            placeMaster.nom = "Test"
            placeMaster.adresse = "Adresse"
            placeMaster.commentaire = "Commentaire"
            const placeMaster1 = new Place()
            placeMaster1.nom = "Test1"
            placeMaster1.adresse = "Adresse1"
            placeMaster1.commentaire = "Commentaire1"

            const placesMaster : Place[] = [placeMaster, placeMaster1]
            console.log(placesMaster)
            const placeRepo = AppDataSource.getRepository(Place);
            
            await placeRepo.save(placesMaster)
            
            const places = await placeRepo.find()
            expect(places).toEqual(placesMaster)
    })
})