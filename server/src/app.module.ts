import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://root:xncaqNNerKIc898V@cluster0.ja4j9.mongodb.net/test'),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}