import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Notas } from './Notas.entity';
import { Repository } from 'typeorm';
import {newNota} from './dto/new.dto'
import {editNota} from './dto/edit.dto'


@Injectable()
export class NotasService {
    
    constructor(@InjectRepository(Notas) private notasRepository:Repository<any>){}
   
    nuevo(nota: newNota){
        
        const nuevaNota = this.notasRepository.create(nota)
        return this.notasRepository.save(nuevaNota)
        }

    listarNotas(){
        return this.notasRepository.find()
    }

    unaNota(id:number){
        return this.notasRepository.findOne({
            where: {
                id:id
            }
        })
    }

    borrarUnaNota(id:number){
        return this.notasRepository.delete({id});        
    }

    modificarNota(id:number, nota: editNota){

       // var notaEdita = this.notasRepository.create(nota)
        //notaEdita.updated_at = Date.now();

        //console.log ( notaEdita.updated_at);
        console.log ( nota);
        this.notasRepository.update({id},nota);
    }
}


