import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {DialogsService} from "../dialogs/dialogs.service";
import {MessagesService} from "./messages.service";
import {Messages} from "../schemas/messages.schema";
import CreateMessageDto from "../dtos/create-message.dto";

@Controller('messages')
export class MessagesController {
    constructor(
        private dialogsService: DialogsService,
        private messagesService: MessagesService
    ) {}

    @Get('/get/:did')
    async GetAllMessagesFromDialog(@Param() params): Promise<Messages[]> {
        return this.messagesService.GetAllMessagesByDialogId(params.did)
    }

    @Post('/new')
    async CreateNewMessage(@Body() createMessageDto: CreateMessageDto): Promise<Messages> {
        return this.messagesService.NewMessage(createMessageDto)
    }
}
