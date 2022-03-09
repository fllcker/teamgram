import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Messages, MessagesDocument} from "../schemas/messages.schema";
import {Model} from "mongoose";
import {Dialogs, DialogsDocument} from "../schemas/dialogs.schema";
import CreateDialogDto from "../dtos/create-dialog.dto";

@Injectable()
export class DialogsService {
    constructor(
        @InjectModel(Messages.name) private messagesModel: Model<MessagesDocument>,
        @InjectModel(Dialogs.name) private dialogsModel: Model<DialogsDocument>
    ) {}

    async CreateNewDialog(createDialogDto: CreateDialogDto): Promise<Dialogs> {
        try {
            let candidate = await this.dialogsModel.findOne({title: createDialogDto.title})
            if (candidate) throw new Error('Dialog already exists!')
            let createdDialog = new this.dialogsModel(createDialogDto)
            return createdDialog.save()
        } catch (e) {
            return e.message
        }
    }

    async GetAllDialogsWhereId(wid): Promise<Dialogs[]> {
        let data = await this.dialogsModel.find({members: {$all : [wid]}}).exec()
        //console.log(data)
        return data
    }

    async FindAll(): Promise<Dialogs[]> {
        return this.dialogsModel.find().exec()
    }
}
