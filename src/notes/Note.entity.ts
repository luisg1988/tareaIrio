import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class notes {
   @PrimaryGeneratedColumn()
    id: number
    @Column()
    name: string
    @Column()
    description: string
    @Column({default:1})
    active: boolean
    @Column({type:'datetime',default: () => 'CURRENT_TIMESTAMP'})
    created_at: Date
    @Column({type:'datetime',default: () => 'CURRENT_TIMESTAMP'})
    updated_at: Date

}