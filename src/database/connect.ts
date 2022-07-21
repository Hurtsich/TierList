import { AppDataSource } from "./data-source";
import { Place } from "./entities/place";

AppDataSource.initialize().then(async () => {
        const placeMaster = new Place()
        placeMaster.nom = "Test"
        placeMaster.adresse = "Adresse"
        placeMaster.commentaire = "Commentaire"
        const placeRepo = AppDataSource.getRepository(Place);

        await placeRepo.save(placeMaster)
        console.log("Insertion...")

        const places = await AppDataSource.getRepository(Place).find()
        console.log(places)
    }
).catch((error) => console.log(error))