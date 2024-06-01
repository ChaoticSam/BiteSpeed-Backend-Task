import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Contact } from 'src/module/contact/contact.entity';
import { ContactModule } from 'src/module/contact/contact.module';
import { ContactRepository } from './module/contact/contact.repository';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Shivam@0102',
      database: 'bitespeed',
      entities: [Contact, ContactRepository],
      synchronize: true,
    }),
    ContactModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
