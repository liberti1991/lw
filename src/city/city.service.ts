/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CityEntity } from './entities/city.entity';

@Injectable()
export class CityService {
  constructor(@InjectRepository(CityEntity)
  private readonly cityRepository: Repository<CityEntity>
  ) { }

  async getAllCity(): Promise<CityEntity[]> {
    return this.cityRepository.find();
  }
}
