import { Controller, Post, Body, Get, Delete, Param, ParseIntPipe, Patch } from '@nestjs/common';
import { newnote } from './dto/newNote.dto';
import { noteService } from './note.service'
import { notes } from './note.entity';
import { editnote } from './dto/editNote.dto';

@Controller('notes')
export class notesController {

    constructor(private notesServ: noteService) { }

    @Post()
    newNote(@Body() nueva: newnote): Promise<notes> {
        return this.notesServ.new(nueva);
    }

    @Get()
    getAllNotes(): Promise<notes[]> {
        return this.notesServ.getAllNotes();
    }

    // get /notes/25
    @Get(':id')
    getNote(@Param('id', ParseIntPipe) id: number):       
        Promise<notes> {           
        return this.notesServ.getOneNote(id);
    }

    // eliminar uno
    @Delete(':id')
    deleteOneNote(@Param('id', ParseIntPipe) id: number){           
        return this.notesServ.deleteOneNote(id);
    }

    //modificar note
    @Patch(':id')
    updateNote(@Param('id', ParseIntPipe) id: number,@Body() note:editnote ){    
        var noteWDate = note;
        //fecha nueva
        noteWDate.updated_at = new Date()
        this.notesServ.updateNote(id,noteWDate);
    }


}
