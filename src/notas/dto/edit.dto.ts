import {Column } from 'typeorm'
export class editNota{
    name?: string
    description?: string
    active?: boolean
   // @Column({type:'datetime',default: () => 'CURRENT_TIMESTAMP'})
    updated_at?: Date
}