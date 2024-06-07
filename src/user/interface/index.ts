namespace UserDto {
  export interface User {
    id: number;
    name: string;
    avatar: string;
    email: string;
    password: string;
  }

  export interface UserCreatePayload extends Omit<User, 'id'> {}

  export interface UserUpdatePayload extends User {}

  export interface UserDeletePayload {
    id: number;
  }
}
