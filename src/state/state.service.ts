/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StateEntity } from './entities/state.entity';

@Injectable()
export class StateService {
  constructor(
    @InjectRepository(StateEntity)
    private readonly statRepository: Repository<StateEntity>
  ) { }

  async getAllState(): Promise<StateEntity[]> {
    return this.statRepository.find()
  }
}
