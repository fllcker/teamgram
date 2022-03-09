import { Module } from '@nestjs/common';
import { MessagesService } from './messages.service';
import {MongooseModule} from "@nestjs/mongoose";
import {Dialogs, DialogsSchema} from "../schemas/dialogs.schema";
import {Messages, MessagesSchema} from "../schemas/messages.schema";
import {DialogsService} from "../dialogs/dialogs.service";
import { MessagesController } from './messages.controller';

@Module({
    providers: [MessagesService, DialogsService],
    imports: [
        MongooseModule.forFeature([
            {name: Messages.name, schema: MessagesSchema},
            {name: Dialogs.name, schema: DialogsSchema}
        ])
    ],
    controllers: [MessagesController]
})
export class MessagesModule {}
