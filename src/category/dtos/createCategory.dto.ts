/* eslint-disable prettier/prettier */
import { IsString } from 'class-validator';

export class CreateCategory {
  @IsString({ message: "Campo name é Obrigatório!", })

  name: string;
}