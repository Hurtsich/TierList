import "reflect-metadata"
import { DataSource } from "typeorm"
import { Place } from "./place"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "jboudt",
    password: "Freyja$80",
    database: "TierList",
    entities: [Place],
})