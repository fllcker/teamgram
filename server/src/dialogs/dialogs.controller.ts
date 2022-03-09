import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {DialogsService} from "./dialogs.service";
import {MessagesService} from "../messages/messages.service";
import {Dialogs} from "../schemas/dialogs.schema";
import CreateDialogDto from "../dtos/create-dialog.dto";

@Controller('dialogs')
export class DialogsController {
    constructor(
        private dialogsService: DialogsService,
        private messagesService: MessagesService
    ) {}

    @Post('/new')
    async newDialog(@Body() createDialogDto: CreateDialogDto): Promise<Dialogs>
    {
        return this.dialogsService.CreateNewDialog(createDialogDto)
    }

    @Get('/whereId/:wid')
    async getAllDialogsWhereId(@Param() params): Promise<Dialogs[]>
    {
        return this.dialogsService.GetAllDialogsWhereId(params.wid);
    }

    @Get('/all')
    async gall(): Promise<Dialogs[]>
    {
        return this.dialogsService.FindAll();
    }
}
