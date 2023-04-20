import { Module } from '@nestjs/common';
import { notesController } from './note.controller';
import { noteService } from './note.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import { notes } from './note.entity';


@Module({
  imports: [TypeOrmModule.forFeature([notes])],
  controllers: [notesController],
  providers: [noteService]
})
export class notesModule {}
