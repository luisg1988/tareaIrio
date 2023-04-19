import { Controller, Post, Body, Get, Delete, Param, ParseIntPipe, Patch } from '@nestjs/common';
import { newNota } from './dto/new.dto';
import { NotasService } from './notas.service'
import { Notas } from './Notas.entity';
import { editNota } from './dto/edit.dto';

@Controller('notas')
export class NotasController {

    constructor(private notasServ: NotasService) { }

    @Post()
    nuevaNota(@Body() nueva: newNota): Promise<Notas> {
        return this.notasServ.nuevo(nueva);
    }

    @Get()
    listarNotas(): Promise<Notas[]> {
        return this.notasServ.listarNotas();
    }

    // get /notas/25
    @Get(':id')
    unaNota(@Param('id', ParseIntPipe) id: number):       
        Promise<Notas> {           
        return this.notasServ.unaNota(id);
    }

    // eliminar uno
    @Delete(':id')
    borrarUnaNota(@Param('id', ParseIntPipe) id: number){           
        return this.notasServ.borrarUnaNota(id);
    }

    //modificar nota
    @Patch(':id')
    modificarNota(@Param('id', ParseIntPipe) id: number,@Body() nota:editNota ){    
        var notaConFecha = nota;
        //fecha nueva
        notaConFecha.updated_at = new Date()
        this.notasServ.modificarNota(id,notaConFecha);
    }


}
