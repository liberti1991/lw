/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CityService } from '../city/city.service';
import { UserService } from './../user/user.service';
import { CreateAddressDto } from './dtos/createAddress.dto';
import { AddressEntity } from './entities/address.entity';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(AddressEntity)
    private readonly addressRepository: Repository<AddressEntity>,
    private readonly userService: UserService,
    private readonly cityService: CityService
  ) { }

  async createAddress(createAddressDto: CreateAddressDto, userId: number,): Promise<AddressEntity> {
    await this.userService.findUserById(userId);
    await this.cityService.findCityById(createAddressDto.cityId);

    return this.addressRepository.save({
      ...createAddressDto,
      userId,
    });
  }

  async findAddressByUserId(userId: number): Promise<AddressEntity[]> {
    const address = await this.addressRepository.find({
      where: { userId },
      // relations: {
      //   city: {
      //     state: true
      //   }
      // }
      relations: ['city', 'city.state']
    })

    if (!address || address.length === 0) {
      throw new NotFoundException(`Endereço não encontrado para o usuário`);
    }

    return address
  }
}