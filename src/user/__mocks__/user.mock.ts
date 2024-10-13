/* eslint-disable prettier/prettier */
import { UserEntity } from '../entities/user.entity';
import { UserType } from '../enum/userType.enum';

export const userEntityMock: UserEntity = {
  cpf: '11122233344',
  createdAt: new Date(),
  email: 'emailMockTest@emali.com',
  id: 43242,
  name: 'mock',
  password: '$2b$10$S62WmVpIxL52Z.0y22DWfuaAz8.XUNESChWP.AlMFZnOJ9n9uiqi.',
  phone: '41997000028',
  typeUser: UserType.User,
  updatedAt: new Date(),
};