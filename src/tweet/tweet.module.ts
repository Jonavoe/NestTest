import { Module } from '@nestjs/common';
import { TweetService } from './tweet.service';
import { TweetController } from './tweet.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Tweet } from './entities/tweet.entity';
import { TweetSchema } from './schema/tweet.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Tweet.name, schema: TweetSchema }]),
  ],
  controllers: [TweetController],
  providers: [TweetService],
})
export class TweetModule {}
