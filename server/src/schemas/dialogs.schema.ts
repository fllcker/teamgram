import mongoose, {Document} from 'mongoose';
import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";

export type DialogsDocument = Dialogs & Document;

@Schema()
export class Dialogs {
    @Prop()
    title: string;

    @Prop()
    members: [string];
}

export const DialogsSchema = SchemaFactory.createForClass(Dialogs);