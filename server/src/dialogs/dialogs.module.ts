import { Module } from '@nestjs/common';
import { DialogsService } from './dialogs.service';
import { DialogsController } from './dialogs.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {Dialogs, DialogsSchema} from "../schemas/dialogs.schema";
import {Messages, MessagesSchema} from "../schemas/messages.schema";
import {MessagesService} from "../messages/messages.service";

@Module({
    providers: [DialogsService, MessagesService],
    controllers: [DialogsController],
    imports: [
        MongooseModule.forFeature([
            {name: Dialogs.name, schema: DialogsSchema},
            {name: Messages.name, schema: MessagesSchema}
        ])
    ]
})
export class DialogsModule {}
