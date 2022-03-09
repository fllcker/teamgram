import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {UsersService} from "./users.service";
import {Users} from "../schemas/users.schema";
import CreateUserDto from "../dtos/create-user.dto";

@Controller('users')
export class UsersController {
    constructor(
        private usersService: UsersService
    ) {}

    @Get('/all')
    async getAllUsers(): Promise<Users[]> {
        return this.usersService.getAllUsers()
    }

    @Get('/id/:uid')
    async getUserById(@Param('uid') uid): Promise<Users> {
        return this.usersService.getUserById(uid)
    }

    @Post('/vad')
    async VeriryAuthData(@Body() body) {
        let {email, passwd} = body;
        let result = await this.usersService.VeriryAuthData(email, passwd)
        if (result) {
            let payload = await this.usersService.getUserByEmail(email)
            return payload
        } else return {error: 1}
    }

    @Get('/byemail/:email')
    async getUserByEmail(@Param('email') pemail:string): Promise<Users> {
        return this.usersService.getUserByEmail(pemail)
    }

    @Post('/new')
    async NewUser(@Body() createUserDto: CreateUserDto): Promise<Users> {
        return this.usersService.createNewUser(createUserDto)
    }
}
