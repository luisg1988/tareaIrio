import { IsBoolean, IsOptional, IsString, MinLength } from 'class-validator'
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class notes {
   @PrimaryGeneratedColumn()
    id: number
    @IsString()
    @MinLength(3)
    @Column()
    name: string
    @IsString()
    @MinLength(3)
    @Column()
    description: string
    @IsOptional()
    @IsBoolean()
    @Column({default:1})
    active: boolean
    @Column({type:'datetime',default: () => 'CURRENT_TIMESTAMP'})
    created_at: Date
    @Column({type:'datetime',default: () => 'CURRENT_TIMESTAMP'})
    updated_at: Date

}