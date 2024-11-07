import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TweetDocument = Tweet & Document;

@Schema()
export class Tweet {
  @Prop({ unique: true })
  idUser: string;
  @Prop({ unique: true })
  msg: string;
  @Prop()
  like: number;
}

export const TweetSchema = SchemaFactory.createForClass(Tweet);
