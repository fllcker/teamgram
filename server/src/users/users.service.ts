import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Users, UsersDocument} from "../schemas/users.schema";
import {Model} from 'mongoose'
import CreateUserDto from "../dtos/create-user.dto";
//import bcrypt from 'bcrypt'

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(Users.name) private usersModel: Model<UsersDocument>
    ) {}

    async getAllUsers(): Promise<Users[]> {
        return this.usersModel.find().exec()
    }

    async getUserById(uId): Promise<Users> {
        return this.usersModel.findById(uId)
    }

    async getUserByEmail(qemail): Promise<Users> {
        return this.usersModel.findOne({email: qemail})
    }

    async VeriryAuthData(qemail, qpasswd): Promise<boolean> {
        let candidate = await this.usersModel.findOne({email: qemail})
        if (!candidate) return false;

        //return bcrypt.compare(candidate.passwd, qpasswd);
        return (candidate.passwd == qpasswd)
    }


    async createNewUser(createUserDto: CreateUserDto): Promise<Users> {
        try {
            let candidate = await this.usersModel.findOne({email: createUserDto.email})
            if (candidate) throw new Error('User already exists!')
            let createdUser = new this.usersModel(createUserDto)
            let payload = await createdUser.save();
            //let token = jwt.sign(payload, process.env.JWTSECRET, {expiresIn: '48h'})
            return payload
        } catch (e) {
            return e.message
        }
    }
}
