/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
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

  async getAllCitiesByStateId(stateId: number): Promise<CityEntity[]> {
    return this.cityRepository.find({
      where: {
        stateId
      }
    });
  }

  async findCityById(id: number): Promise<CityEntity> {
    const city = await this.cityRepository.findOne({
      where: { id }
    })

    if (!city) {
      throw new NotFoundException(`Cidade não encontrada!`)
    }

    return city;
  }
}
