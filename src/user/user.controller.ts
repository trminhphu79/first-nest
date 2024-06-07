import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(public userService: UserService) {}

  @Get()
  public getUsers() {
    return this.userService.getUsers();
  }

  @Get(':id')
  public getUserById(@Param('id') id: number) {
    return this.userService.getUserById(id);
  }

  @Post()
  public addUser(@Body() user: UserDto.UserCreatePayload) {
    return this.userService.addUser(user);
  }
}
