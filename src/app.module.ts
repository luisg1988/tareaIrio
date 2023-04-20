import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { notesModule } from './notes/note.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dirname } from 'path';

@Module({
  imports: [TypeOrmModule.forRoot({
    type:'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password:'',
    database:'crudbd',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true
    
  }),notesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
