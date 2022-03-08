import {Document} from 'mongoose';
import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";

export type UsersDocument = Users & Document;

@Schema()
export class Users {
    @Prop({required: true})
    email: string;

    @Prop()
    username: string;

    @Prop({required: true})
    passwd: string;
}

export const UsersSchema = SchemaFactory.createForClass(Users);