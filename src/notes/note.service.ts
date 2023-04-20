import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { notes } from './note.entity';
import { Repository } from 'typeorm';
import { newnote } from './dto/newNote.dto'
import { editnote } from './dto/editNote.dto'


@Injectable()
export class noteService {
    constructor(@InjectRepository(notes) private notesRepository: Repository<any>) { }

    new(note: newnote) {

        const newNote = this.notesRepository.create(note)
        return this.notesRepository.save(newNote)
    }

    getAllNotes() {
        return this.notesRepository.find()
    }

    getOneNote(id: number) {
        return this.notesRepository.findOne({
            where: {
                id: id
            }
        })
    }

    deleteOneNote(id: number) {
        return this.notesRepository.delete({ id });
    }

    updateNote(id: number, note: editnote) {
        this.notesRepository.update({ id }, note);
    }
}


