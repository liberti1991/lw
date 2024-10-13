/* eslint-disable prettier/prettier */
import { UserEntity } from '../entities/user.entity';
import { UserType } from '../enum/userType.enum';

export const userEntityMock: UserEntity = {
  cpf: '11122233344',
  createdAt: new Date(),
  email: 'emailMockTest@emali.com',
  id: 43242,
  name: 'mock',
  password: 'mock',
  phone: '41997000028',
  typeUser: UserType.User,
  updatedAt: new Date(),
};