import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Messages, MessagesDocument} from "../schemas/messages.schema";
import {Model} from "mongoose";
import {Dialogs, DialogsDocument} from "../schemas/dialogs.schema";
import CreateMessageDto from "../dtos/create-message.dto";

@Injectable()
export class MessagesService {
    constructor(
        @InjectModel(Messages.name) private messagesModel: Model<MessagesDocument>,
        @InjectModel(Dialogs.name) private dialogsModel: Model<DialogsDocument>
    ) {}

    async GetAllMessagesByDialogId(dId): Promise<Messages[]> {
        return this.messagesModel.find({dialogId: dId}).exec()
    }

    async NewMessage(createMessageDto: CreateMessageDto): Promise<Messages> {
        let createdMessage = new this.messagesModel(createMessageDto)
        return createdMessage.save()
    }
}
