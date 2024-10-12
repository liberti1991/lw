/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { hash } from 'bcrypt';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dtos/createUser.dto';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) { }

  async createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
    const saltOrRounds = 10;

    const passwordHashed = await hash(createUserDto.password, saltOrRounds)

    console.log('passwordHashed', passwordHashed);


    return this.userRepository.save({
      ...createUserDto,
      typeUser: 1,
      password: passwordHashed,
    });
  }

  async getUserByIdUsingRelations(userId: number): Promise<UserEntity> {
    return this.userRepository.findOne({
      where: {
        id: userId,
      },
      relations: {
        addresses: {
          city: {
            state: true
          }
        }
      }
    })
  }

  async getAllUser(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }

  async findUserById(id: number): Promise<UserEntity> {

    const user = await this.userRepository.findOne({
      where: { id },
    })

    if (!user) {
      throw new NotFoundException(`Usuário não encontrado!`)
    }

    return user
  }

  async findUserByEmail(email: string): Promise<UserEntity> {
    const user = await this.userRepository.findOne({
      where: { email },
    })

    if (!user) {
      throw new NotFoundException(`Email: ${email} não encontrado!`)
    }

    return user;
  }

}

