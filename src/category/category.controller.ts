/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { Roles } from 'src/decorator/roles.decorator';
import { UserType } from 'src/user/enum/userType.enum';
import { CategoryService } from './category.service';
import { CreateCategory } from './dtos/createCategory.dto';
import { ReturnCategory } from './dtos/returnCategory.dto';
import { CategoryEntity } from './entities/category.entity';

@Roles(UserType.Admin, UserType.User)
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) { }

  @Get()
  async findAllCategories(): Promise<ReturnCategory[]> {
    return (await this.categoryService.findAllCategories()).map((category) => new ReturnCategory(category))
  }


  @Roles(UserType.Admin)
  @UsePipes(ValidationPipe)
  @Post()
  async createCategory(@Body() createCategory: CreateCategory): Promise<CategoryEntity> {
    return this.categoryService.createCategory(createCategory)
  }
}