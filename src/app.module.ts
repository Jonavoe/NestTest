import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TweetModule } from './tweet/tweet.module';

require('dotenv').config();

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DB_URI),
    ItemsModule,
    AuthModule,
    UsersModule,
    TweetModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
@Module({
  imports: [],
})
export class AppModule {}
