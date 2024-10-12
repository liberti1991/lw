/* eslint-disable prettier/prettier */
import { Controller, Get, Param } from '@nestjs/common';
import { CityService } from './city.service';
import { CityEntity } from './entities/city.entity';

@Controller('city')
export class CityController {
  constructor(private readonly cityService: CityService) { }

  @Get()
  async getAllCity(): Promise<CityEntity[]> {
    return this.cityService.getAllCity();
  }

  @Get('/:id')
  async getAllCitiesByStateId(@Param('id') stateId: number): Promise<CityEntity[]> {
    return this.cityService.getAllCitiesByStateId(stateId);
  }
}
