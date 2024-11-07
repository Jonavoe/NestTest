import { Injectable } from '@nestjs/common';
import { CreateTweetDto } from './dto/create-tweet.dto';
import { UpdateTweetDto } from './dto/update-tweet.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Tweet } from './entities/tweet.entity';
import { TweetDocument } from './schema/tweet.schema';
import { Model } from 'mongoose';

@Injectable()
export class TweetService {
  constructor(
    @InjectModel(Tweet.name) private tweetModel: Model<TweetDocument>,
  ) {}

  async create(createTweetDto: CreateTweetDto): Promise<Tweet> {
    const newTweet = new this.tweetModel(createTweetDto);
    return await newTweet.save();
  }

  async findAll(): Promise<Tweet[]> {
    return await this.tweetModel.find().exec();
  }

  async findOne(id: string): Promise<Tweet> {
    return await this.tweetModel.findOne({ idTweet: id }).exec();
  }

  async update(id: string, updateTweetDto: UpdateTweetDto): Promise<Tweet> {
    return await this.tweetModel
      .findOneAndUpdate({ idTweet: id }, updateTweetDto, { new: true })
      .exec();
  }

  async remove(id: string): Promise<Tweet> {
    return await this.tweetModel.findOneAndDelete({ idTweet: id }).exec();
  }
}
