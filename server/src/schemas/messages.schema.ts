import {Document} from 'mongoose';
import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";

export type MessagesDocument = Messages & Document;

@Schema()
export class Messages {
    @Prop({required: true})
    dialogId: string;

    @Prop()
    ownerId: string;

    @Prop()
    messageText: string;
}

export const MessagesSchema = SchemaFactory.createForClass(Messages);