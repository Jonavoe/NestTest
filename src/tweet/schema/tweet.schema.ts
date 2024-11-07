import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TweetDocument = Tweet & Document;

@Schema({ timestamps: true })
export class Tweet {
  @Prop({ unique: true })
  idUser: string;
  @Prop({ unique: true })
  msg: string;
  @Prop()
  like: number;
  @Prop({ default: Date.now })
  createdAt: Date;
}

export const TweetSchema = SchemaFactory.createForClass(Tweet);
