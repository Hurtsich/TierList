import { AppDataSource } from "./data-source";
import { createDatabase, setDataSource } from 'typeorm-extension';
import { DataSourceOptions } from "typeorm";

(async () => {
    const options: DataSourceOptions = {type: 'postgres', database: 'TierList'}
    await createDatabase({options: options, ifNotExist: true})
})

AppDataSource.initialize()