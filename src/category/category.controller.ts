/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { Roles } from 'src/decorator/roles.decorator';
import { UserType } from 'src/user/enum/userType.enum';
import { CategoryService } from './category.service';
import { ReturnCategory } from './dtos/returnCategory.dto';

@Roles(UserType.Admin, UserType.User)
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) { }

  @Get()
  async findAllCategories(): Promise<ReturnCategory[]> {
    return (await this.categoryService.findAllCategories()).map((category) => new ReturnCategory(category))
  }

}