const { getClient } = require('./connect.js')

export function createDatabase() {
    async () => {
        const client = getClient()
        const createDatabaseQuery = `SELECT 'CREATE DATABASE mydb' 
                       WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'TierList')\\gexec`
        await client.query(createDatabaseQuery)
        console.log(`Database Created`)
        const createTablePlaces = `CREATE TABLE IF NOT EXISTS Places(
            id BIGSERIAL PRIMARY KEY NOT NULL ,
            nom varchar NOT NULL,
            adresse varchar NOT NULL,
            commentaire varchar NOT NULL
          );
        `
        await client.query(createTablePlaces)
        console.log("Table Places created")
        await client.end()
    }
}