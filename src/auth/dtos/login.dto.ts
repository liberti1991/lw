/* eslint-disable prettier/prettier */
import { IsString } from 'class-validator';

export class LoginDto {
  @IsString({ message: 'O campo "email" deve ser uma string válida.' })
  email: string;

  @IsString({ message: 'O campo "password" deve ser uma string válida.' })
  password: string;
}