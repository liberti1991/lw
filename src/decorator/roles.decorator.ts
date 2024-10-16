/* eslint-disable prettier/prettier */
import { SetMetadata } from '@nestjs/common';
import { UserType } from '../user/enum/userType.enum';

export const ROLES_KEY = 'roles';

export const Roles = (...roles: UserType[]) => SetMetadata(ROLES_KEY, roles);