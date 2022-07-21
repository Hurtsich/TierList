import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Place {
    @PrimaryGeneratedColumn()
    id!: Number

    @Column()
    nom!: String
    
    @Column()
    adresse!: String
    
    @Column()
    commentaire!: String
}
