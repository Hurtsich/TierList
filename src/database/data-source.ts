import "reflect-metadata"
import { DataSource } from "typeorm"
import { Place } from "./entities/place"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "jboudt",
    password: "docker",
    database: "TierList",
    entities: [Place],
    schema: "public",
    synchronize: true,
    dropSchema:true
})