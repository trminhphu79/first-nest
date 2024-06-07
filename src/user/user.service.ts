import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  users: Array<UserDto.User> = [];

  getUsers() {
    return this.users;
  }

  getUserById(id: number) {
    return this.users.find((user) => user.id === id);
  }

  addUser(user: UserDto.UserCreatePayload) {
    const newUser = {
      id: this.users.length + 1,
      ...user,
    };

    this.users.push(newUser);

    return newUser;
  }
}
